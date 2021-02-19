<?php
if (!defined('ABSPATH')) exit;
// add category 
if (!function_exists('zita_blocks_block_categories')) {
    function zita_blocks_block_categories($categories, $post)
    {
        return array_merge(
            $categories,
            array(
                array(
                    'slug' => 'zita-category',
                    'title' => __('Zita Block Lite', 'zita-blocks'),
                    'icon'  => 'wordpress',
                ),
            )
        );
    }
    add_filter('block_categories', 'zita_blocks_block_categories', 10, 2);
}
// register blocks common function
if (!function_exists('zita_blocks_register_block_fn')) {
    function zita_blocks_register_block_fn($blockName, $extraFeature = [])
    {
        register_block_type(
            'zita-blocks/' . $blockName,
            array_merge(array(
                'editor_script' => 'zita-blocks-editor-secript',
                'editor_style'  => 'zita-blocks-editor-style',
                'script'  => 'zita-blocks-script',
                'style'         => 'frontend-style'
            ), $extraFeature)
        );
    }
}
// array value sanitize
if (!function_exists('zita_blocks_array_sanitize')) {
    function zita_blocks_array_sanitize($arr)
    {
        $returnArray = [];
        if (is_array($arr)) {
            foreach ($arr as $key => $value) {
                $key = is_numeric($key) ? $key : sanitize_text_field($key);
                if (is_array($value)) {
                    $returnArray[$key] = zita_blocks_array_sanitize($value);
                } else {
                    $value = is_numeric($value) ? intval($value) : sanitize_text_field($value);
                    $returnArray[$key] = $value;
                } //else
            } //foreach
        }
        return !empty($returnArray) ? $returnArray : false;
    }
}
