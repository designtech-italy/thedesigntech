<?php

namespace NGS\NgsApproveRequest\Controller;

use NGS\NgsApproveRequest\Utils\HttpService;
use TYPO3\CMS\Core\Exception;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Configuration\ConfigurationManagerInterface;
use TYPO3\CMS\Extbase\Mvc\Controller\ActionController;
use TYPO3\CMS\Core\Utility\HttpUtility;
use TYPO3\CMS\Frontend\ContentObject\ContentObjectRenderer;


/**
 * BookingController
 */
class BookingController extends ActionController
{

    /**
     * @param ConfigurationManagerInterface $configurationManager
     */
    public function injectConfigurationManager(ConfigurationManagerInterface $configurationManager)
    {
        parent::injectConfigurationManager($configurationManager);
        $this->initHttpService( $this->settings);
    }

    private function initHttpService(array $settings): void
    {
        $this->httpService =  GeneralUtility::makeInstance(HttpService::class);
        $this->httpService->setSettings($settings);
    }

    /**
     * @throws \JsonException
     * @throws \ErrorException
     */
    public function bookingAction()
    {
        $queryParams = $this->request->getQueryParams();
        $requestParams = self::getParams($queryParams);

        try {
            $result = $this->httpService->makePatchRequest($requestParams);
        }catch (Exception $exception){
            $this->redirectToPage($this->settings['deniedPage']);
        }

        if(isset($result['success'])){
            $this->redirectToPage($this->settings['successPage']);
        }

        $this->redirectToPage($this->settings['deniedPage']);
    }

    public function eventAction()
    {
        $queryParams = $this->request->getQueryParams();
        $requestParams = self::getParams($queryParams);
    
    
        try {
            $result = $this->httpService->makePatchRequest($requestParams);
        }catch (Exception $exception){
            $this->redirectToPage($this->settings['deniedPage']);
        }
  
        if(isset($result['success'])){
            $this->redirectToPage($this->settings['successPage']);
        }

        $this->redirectToPage($this->settings['deniedPage']);
    }

    private static function getParams(array $params): array
    {
        $paramsArray = [];

        foreach ($params as $key => $param) {
            if (!is_array($param)) {
                $paramsArray[$key] = $param;
                continue;
            }

            $paramsArray = array_merge(self::getParams($param), $paramsArray);
        }

        return $paramsArray;
    }

    private function redirectToPage(string  $pageId){

        $targetUrl = '';

        /** @var ContentObjectRenderer $contentObject */
        $contentObject = GeneralUtility::makeInstance(ContentObjectRenderer::class);
        $typoLinkConfiguration = [
            'parameter' => $pageId,
            'forceAbsoluteUrl' => true
        ];
        $targetUrl = $contentObject->typoLink_URL($typoLinkConfiguration);

// Perform the redirect if a valid URL is obtained
        if (!empty($targetUrl)) {
            HttpUtility::redirect($targetUrl);
        }

    }




}
