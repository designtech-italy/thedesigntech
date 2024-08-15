<?php

namespace NGS\NgsApproveRequest\Utils;

class HttpService
{

    protected array $settings = [];

    public function setSettings(array $settings): void
    {
        $this->settings = $settings;
    }

    /**
     * @throws \ErrorException
     * @throws \JsonException
     */
    public function makePatchRequest($requestParams)
    {
        $remoteUrl = $this->getFullUrl($requestParams);
        $bodyParams = ['status' => $requestParams['status']];
        $curl = curl_init($remoteUrl);
        curl_setopt($curl, CURLOPT_URL, $remoteUrl);
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'PATCH');
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

        $headers = array(
            "Accept: application/json",
            "Content-Type: application/json",
        );

        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($bodyParams, JSON_THROW_ON_ERROR));
        $resp = curl_exec($curl);
        
        curl_close($curl);
        return json_decode($resp, true, 512, JSON_THROW_ON_ERROR);
    }

    /**
     * @throws \ErrorException
     */
    private function getFullUrl($requestParams): string
    {
        $remoteUrl = $this->settings['remoteUrl'] ?? '';

        if (!$remoteUrl) {
            throw new \ErrorException('Remote url is required ');
        }

        if (substr($remoteUrl, -1) !== '/') {
            $remoteUrl .= '/';
        }

        return $remoteUrl . $requestParams['action'] . '/' . $requestParams['id'] . '/' . $requestParams['userHash'] . '/participant-status';
    }


}