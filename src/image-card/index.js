/**
 * Register block
 */
wp.blocks.registerBlockType(
	'themecoder-block/image-card',
	{
		title: wp.i18n.__( 'Image Card', 'themecoder-block' ),

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
