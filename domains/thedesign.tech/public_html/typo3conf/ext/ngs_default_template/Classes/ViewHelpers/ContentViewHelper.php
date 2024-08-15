<?php 
namespace NGS\NgsDefaultTemplate\ViewHelpers;

use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;
use TYPO3Fluid\Fluid\Core\Rendering\RenderingContextInterface;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Database\ConnectionPool;

class ContentViewHelper extends AbstractViewHelper {

    protected $escapeOutput = false;
    
    public function initializeArguments() {
        parent::initializeArguments();
        $this->registerArgument('contentUid', 'string', '', true);
    }
    
    public function render()
    {
        $contentRecords = '';
        $contentUid = (int)$this->arguments['contentUid'];
        $table = 'tt_content';
        
        $query = GeneralUtility::makeInstance(ConnectionPool::class)
		->getQueryBuilderForTable($table)
		->select('*')
		->from($table, 'table')
		->andWhere('table.uid = ' . $contentUid);
        ;
        $element = $query->execute()->fetch();
        
        if (!!$element) $contentRecords = $this->renderRecord($element);
        
        return $contentRecords;
    }
    
    /**
     * This function renders a raw tt_content record into the corresponding
     * element by typoscript RENDER function. We keep track of already
     * rendered records to avoid rendering the same record twice inside the
     * same nested stack of content elements.
     *
     * @param array $row
     * @return string|NULL
     */
    protected static function renderRecord(array $row)
    {
        if (0 < $GLOBALS['TSFE']->recordRegister['tt_content:' . $row['uid']]) {
            return null;
        }
        $conf = [
            'tables' => 'tt_content',
            'source' => $row['uid'],
            'dontCheckPid' => 1
        ];
        $parent = $GLOBALS['TSFE']->currentRecord;
        // If the currentRecord is set, we register, that this record has invoked this function.
        // It's should not be allowed to do this again then!!
        if (false === empty($parent)) {
            ++$GLOBALS['TSFE']->recordRegister[$parent];
        }
        $html = $GLOBALS['TSFE']->cObj->cObjGetSingle('RECORDS', $conf);

        $GLOBALS['TSFE']->currentRecord = $parent;
        if (false === empty($parent)) {
            --$GLOBALS['TSFE']->recordRegister[$parent];
        }
        return $html;
    }
}