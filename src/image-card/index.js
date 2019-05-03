/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

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

		edit( props ) {
			const { className } = props;

			return (
				<div className={ className }>
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
