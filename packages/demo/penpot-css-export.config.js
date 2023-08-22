require('dotenv').config()

/**
 * @type {import('penpot-css-export').Config}
 */
const config = {
  accessToken: process.env.PENPOT_ACCESS_TOKEN,
  pages: [
    {
      output: 'src/styles/ui.css', // 👈🏻 Path where your css should be generated.
      fileId: 'abea3ef6-4c19-808a-8003-01370d9cb586',
      pageId: '71b1702b-2eb1-81d6-8002-f82a5f182088',
    },
  ],
}

module.exports = config
