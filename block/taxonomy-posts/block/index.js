'use strict';

import blockConfig from '../../../src/js/config/block';
import edit from './edit';
import save from './save';
import example from './example';

import {
	__,
} from '@wordpress/i18n';

export const name = 'snow-monkey-blocks/taxonomy-posts';

export const settings = {
	title: __( 'Taxonomy posts', 'snow-monkey-blocks' ),
	description: __( 'You can display recent posts linked to any taxonomy.', 'snow-monkey-blocks' ),
	icon: {
		foreground: blockConfig.blockIconColor,
		src: 'editor-ul',
	},
	category: blockConfig.blockCategories.common,
	edit,
	save,
	example,
};
