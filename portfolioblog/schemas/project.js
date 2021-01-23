export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
        name : 'image',
        title : 'Image',
        type : 'image'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      }
    },
    {
      name : 'title1',
      title : 'Title1',
      type : 'string'
    },
    {
        name : 'imageCon1',
        title : 'Image Content 1',
        type : 'image'
    },
    {
      name: 'stack',
      title: 'Stack',
      type: 'array',
      of: [{type: 'reference', to: {type: 'stack'}}],
    },
    {
      name : 'content1',
      title : 'ConBlock1',
      type : 'text',
    },
    {
      name : 'title2',
      title : 'Title2',
      type : 'string'
    },
    {
        name : 'imageCon2',
        title : 'Image Content 2',
        type : 'image'
    },
    {
      name : 'content2',
      title : 'ConBlock2',
      type : 'text'
    },
    {
        name : 'gitLink',
        title : 'Github Link',
        type : 'url'
    },
    {
        name : 'kagLink',
        title : 'Kaggle Link',
        type : 'url'
    },
    {
        name : 'extLink',
        title : 'External Link',
        type : 'url'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }
  ],
}
