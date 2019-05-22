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
				source: 'html',
				selector: '.tc-title',
			},
			description: {
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

			const changeTitle = function( newTitle ) {
				setAttributes( { title: newTitle } );
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
								onChange={ ( value ) => setAttributes( { description: value } ) }
								placeholder={ __( 'Write a description…', 'gt-blocks' ) }
								keepPlaceholderOnFocus
							/>

						</div>

					</div>
				</div>
			);
		},

		save() {
			return (
				<div>
					<div className="tc-columns">

						<div className="tc-image">

						</div>

						<div className="tc-card">

							<h2>Titel des Blocks</h2>
							<p>Beschreibung des Blocks.</p>

						</div>

					</div>
				</div>
			);
		},
	}
);
