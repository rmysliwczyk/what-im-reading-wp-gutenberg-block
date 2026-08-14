/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	return (
		<>
			<section { ...useBlockProps() }>
				<h2>{"I'm currently reading:"}</h2>
				<p>This component will be rendered properly after editing is complete. Below are needed ACF fields and their settings.</p>

				<h3>Book Image:</h3>
				<p>Type: Image, Field Name: book_image, Return Format: Image ID</p>

				<h3>Book Title:</h3>
				<p>Type: Text, Field Name: book_title</p>

				<h3>Link to Book:</h3>
				<p>Type: Link, Field Name: book_link, Return Format: Link URL</p>
			</section>
		</>
	);
}
