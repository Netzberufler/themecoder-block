/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { RichText } = wp.editor;

/**
 * Internal dependencies
 */
import './style.scss';

/**
 * Register block
 */
registerBlockType(
	'themecoder-block/image-card',
	{
		title: __( 'Image Card', 'themecoder-block' ),

		icon: 'images-alt2',

		category: 'layout',

		attributes: {
			title: {
				type: 'string',
				source: 'html',
				selector: '.tc-title',
			},
			description: {
				type: 'string',
				source: 'html',
				selector: '.tc-description',
			},
		},

		edit( props ) {
			const {
				attributes,
				className,
				setAttributes,
			} = props;

			const {
				title,
				description,
			} = attributes;

			function changeTitle( newTitle ) {
				setAttributes( { title: newTitle } );
			}

			function changeDescription( newDescription ) {
				setAttributes( { description: newDescription } );
			}

			return (
				<div className={ className }>
					<div className="tc-columns">

						<div className="tc-image">

						</div>

						<div className="tc-card">

							<RichText
								tagName="h2"
								value={ title }
								className="tc-title"
								onChange={ changeTitle }
								placeholder={ __( 'Add a title…', 'gt-blocks' ) }
								keepPlaceholderOnFocus
							/>

							<RichText
								tagName="p"
								value={ description }
								className="tc-description"
								onChange={ changeDescription }
								placeholder={ __( 'Write a description…', 'gt-blocks' ) }
								keepPlaceholderOnFocus
							/>

						</div>

					</div>
				</div>
			);
		},

		save( { attributes } ) {
			const {
				title,
				description,
			} = attributes;

			return (
				<div>
					<div className="tc-columns">

						<div className="tc-image">

						</div>

						<div className="tc-card">

							<RichText.Content
								tagName="h2"
								className="tc-title"
								value={ title }
							/>

							<RichText.Content
								tagName="p"
								className="tc-description"
								value={ description }
							/>

						</div>

					</div>
				</div>
			);
		},
	}
);
