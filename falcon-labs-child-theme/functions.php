<?php
/**
 * Falcon Labs Child Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Falcon Labs Child
 * @since 1.0.0
 */

// Enqueue Inter font from Google Fonts
function falcon_labs_enqueue_fonts() {
    wp_enqueue_style(
        'inter-font',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        array(),
        '1.0.0'
    );
}
add_action( 'wp_enqueue_scripts', 'falcon_labs_enqueue_fonts' );

// Enqueue parent and child theme styles
function falcon_labs_enqueue_styles() {
    wp_enqueue_style(
        'parent-style',
        get_template_directory_uri() . '/style.css'
    );

    wp_enqueue_style(
        'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array('parent-style'),
        wp_get_theme()->get('Version')
    );
}
add_action( 'wp_enqueue_scripts', 'falcon_labs_enqueue_styles' );

// Add theme support for various features
function falcon_labs_setup() {
    // Add support for responsive embedded content
    add_theme_support( 'responsive-embeds' );

    // Add support for custom logo
    add_theme_support( 'custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ) );

    // Add support for post thumbnails
    add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'falcon_labs_setup' );

// Custom excerpt length
function falcon_labs_excerpt_length( $length ) {
    return 30;
}
add_filter( 'excerpt_length', 'falcon_labs_excerpt_length', 999 );

// Custom excerpt more
function falcon_labs_excerpt_more( $more ) {
    return '...';
}
add_filter( 'excerpt_more', 'falcon_labs_excerpt_more' );

// Add custom body classes
function falcon_labs_body_classes( $classes ) {
    $classes[] = 'falcon-labs-theme';
    return $classes;
}
add_filter( 'body_class', 'falcon_labs_body_classes' );

// Enqueue custom scripts
function falcon_labs_enqueue_scripts() {
    wp_enqueue_script( 'falcon-labs-hide-empty', get_stylesheet_directory_uri() . '/js/hide-empty.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'falcon_labs_enqueue_scripts' );

// Force excerpt display in blog listings
add_filter( 'astra_blog_post_content', function( $content ) {
    if ( is_home() || is_archive() || is_search() ) {
        if ( has_excerpt() ) {
            return '<p>' . get_the_excerpt() . '</p>';
        } else {
            return wp_trim_words( get_the_content(), 30 );
        }
    }
    return $content;
} );

// Hide empty entry-content containers - removed inline script