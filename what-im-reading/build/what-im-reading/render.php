<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<?php
	$book_title = get_field($attributes['bookTitleACFKey']);
	$book_image = get_field($attributes['bookImageACFKey']);
	$book_link = get_field($attributes['bookLinkACFKey']);

	if(is_array($book_image)) {
		/* Image Return Type: 'Image Array' */
		$book_image = $book_image['id'];
	} elseif (wp_http_validate_url($book_image)) {
		/* Image Return Type: 'Image URL' */
		$book_image = attachment_url_to_postid($book_image);
	} else {
		/* Image Return Type: 'Image ID' */
		/* $book_image already is ID */
	}

	if(is_array($book_link)) {
		/* Link Return Type: 'Link Array' */
		$book_link_href = $book_link['url'] ?:'#';
		$book_link_title = $book_link['title'] ?: $book_link_href;
	} else {
		/* Link Return Type: 'Link URL' */
		$book_link_href = $book_link;
		$book_link_title = $book_link_href;
	}
?>
<section <?php echo get_block_wrapper_attributes(); ?>>
	<h2>I'm currently reading:</h2>
	<?php echo wp_get_attachment_image( $book_image, 'medium')?>
	<p><?= esc_html($book_title) ?></p>
	<a href="<?= esc_url($book_link_href)?>">
		<?= esc_html($book_link_title)?>
	</a>
</section>
