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
import { useBlockProps, InspectorControls, InnerBlocks} from '@wordpress/block-editor';
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

import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import { SelectControl } from '@wordpress/components';
import { useState, useEffect } from 'react';

export default function Edit({attributes, setAttributes}) {
	const {bookTitleACFKey, bookImageACFKey, bookLinkACFKey} = attributes;
	const [errorMessage, setErrorMessage] = useState();
	const [ACFFields, setACFFields] = useState({text: [], image: [], link: []})
	const blockProps = useBlockProps();


	useEffect(() => {
		if (typeof acf !== 'undefined') {
			setACFFields({
				text: acf.getFields({type: 'text'}).map((field) => ({label: field.data.name, value: field.data.name})),
				image: acf.getFields({type: 'image'}).map((field) => ({label: field.data.name, value: field.data.name})),
				link: acf.getFields({type: 'link'}).map((field) => ({label: field.data.name, value: field.data.name}))
			})
		} else {
			setErrorMessage('ACF Plugin is required to use this block.');
		}
	},[])

	return (
		<>
			{!errorMessage ? (
			<>
			<InspectorControls>
			<Panel header="Settings">
				<PanelBody title="ACF Fields" initialOpen={ true }>
				<PanelRow>{"Select which ACF Fields to bind with the component"}</PanelRow>
				<SelectControl
					label="Book Image"
					value={ bookImageACFKey }
					options={ [{label: "No key selected", value: null}, ...ACFFields.image] }
					onChange={ ( value ) => setAttributes({ bookImageACFKey: value }) }
				/>
				<SelectControl
					label="Book Title"
					value={ bookTitleACFKey }
					options={ [{label: "No key selected", value: null}, ...ACFFields.text]}
					onChange={ ( value ) => setAttributes({ bookTitleACFKey: value }) }
				/>
				<SelectControl
					label="Book Link"
					value={ bookLinkACFKey }
					options={ [{label: "No key selected", value: null}, ...ACFFields.link]}
					onChange={ ( value ) => setAttributes({ bookLinkACFKey: value }) }
				/>
			</PanelBody>
			</Panel>
			</InspectorControls>
			<section { ...blockProps }>
				<h2>{"I'm currently reading:"}</h2>
			</section>
			</> ) : (
			<section {...blockProps} >
				<p>{errorMessage}</p>
			</section>
			)}
		</>
	);
}
