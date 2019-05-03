/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

/**
 * Register block
 */
registerBlockType(
	'themecoder-block/image-card',
	{
		title: __( 'Image Card', 'themecoder-block' ),

		icon: 'images-alt2',

		category: 'layout',

		edit() {
			return (
				<div>Block Content im Editor</div>
			);
		},

		save() {
			return (
				<div>Block Content im Frontend</div>
			);
		},
	}
);
