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
	/* I'm using ifs to check these further, because ACF doesn't show on 'Preview'*/
	$book_image = get_field("book_image");
	$book_title = get_field("book_title");
	$book_link = get_field("book_link");
?>
<section <?php echo get_block_wrapper_attributes(); ?>>
	<h2>I'm currently reading:</h2>
	<?php if (!$book_image || !$book_title || !$book_link): ?>
		<p>This component will be rendered properly after editing is complete. Below are needed ACF fields and their settings.</p>
	<?php endif; ?>

	<?php if ($book_image): ?>
		<div>
			<?php echo wp_get_attachment_image($book_image, 'medium'); ?>
		</div>
	<?php else: ?>
		<h3>Book Image:</h3>
		<p>Type: Image, Field Name: book_image, Return Format: Image ID</p>
	<?php endif; ?>

	<?php if ($book_title): ?>
		<p><?=$book_title ?></p>
	<?php else: ?>
		<h3>Book Title:</h3>
		<p>Type: Text, Field Name: book_title</p>
	<?php endif; ?>

	<?php if ($book_link): ?>
		<p><a href=<?=$book_link?>>Link: lubieczytac.pl</a></p>
	<?php else: ?>
		<h3>Link to Book:</h3>
		<p>Type: Link, Field Name: book_link, Return Format: Link URL</p>
	<?php endif; ?>


</section>
