var ghPages = require('gh-pages');

ghPages.publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/jasonjohnson47/mdn-svelte-todo-list',
		user: {
			name: 'Jason Johnson',
			email: 'jasonjohnson47@gmail.com'
		}
	},
	() => {
		console.log('Deploy Complete!');
	}
);