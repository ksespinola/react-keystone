var keystone = require('keystone'),
  	Types = keystone.Field.Types;

var Post = new keystone.List('Post', {
  map: { name: 'title' },
  autokey: { path: 'slug', from: 'title', unique: true },
	track:true,
});

Post.add({
  title: { type: String, required: true },
  slug: { type: String, index: true },
  state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
  author: { type: Types.Relationship, ref: 'User', index: true },
  publishedDate: { type: Types.Date, index: true },
  image: {
    type: Types.LocalFile,
    dest: '/data/files',
    prefix: '/files/',
    filename: function(item, file){
			console.log(item ,file);
      return item.id + '.' + file.extension
    }
  },
  text: { type: Types.Html, wysiwyg: true, height: 400},
  topics: { type: Types.Relationship, ref: 'categories', many: true },
});

/**
 Relationships
 =============
 */

Post.relationship({ path: 'comments', ref: 'Comment', refPath: 'comment' });

Post.track = true;
Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Post.register();
