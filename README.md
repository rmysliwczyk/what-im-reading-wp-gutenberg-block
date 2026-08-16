# What I'm Reading - Gutenberg Block
This repository holds code for *What I'm Reading*, my WordPress plugin, which adds a custom block to WordPress.

Watch a brief video feature presentation here where I showcase the main features: [What I'm Reading - Wordpress Plugin - Feature Presentation](https://youtu.be/hHB3TX7Prdw)

[![](/what-im-reading/assets/screenshot-1.png)](https://www.youtube.com/watch?v=hHB3TX7Prdw&feature=youtu.be)
## Highlights
- ACF fields' values are displayed in the editor, to allow for dynamic WYSIWIG experience.
- Handling of different ACF fields' *Return Formats* for better user experience.
- Integration with Gutenberg settings panel to allow easy modification of the block appearance.

## Requirements
- This plugin requires [ACF](https://pl.wordpress.org/plugins/advanced-custom-fields) to be installed and active.

## How to install
- Get the latest .zip release file from *Releases* here on GitHub and install it in your WordPress admin panel.

## How to use
- In WP Admin go to ACF -> Field Groups
- Create a Field Group with 3 fields: Image, Text, Link.
- Open editor for a post
- Check if Field Group is enabled: ... -> Preferences -> General -> Advanced -> *Your Field Group name*
- Fill out values for ACF at the bottom of the editor, in the *Meta Boxes* panel.
- Add block *What I'm Reading*
- From the settings to the right, select which ACF fields to bind to.

## Project development details
For developing the plugin I've used  
- [@wordpress/create-block](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) for initial scaffolding of the project.
- [wp-env](https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-env/) for development environment.
- WordPress hosted on Oracle Cloud VPS https://wp-blog.ddnsfree.com/ for production environment.
