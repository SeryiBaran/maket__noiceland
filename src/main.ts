import '@fontsource-variable/libre-franklin' // 100, 200, 300, 400, 500, 600, 700, 800, 900
import '@fontsource/tenor-sans' // 400
import '@fontsource/source-serif-pro' // 400

import 'gardevoir'
import './style.css'

function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg)
  }
}

const posts = [
  {
    image: '/images/post_image_1.png',
    tag: 'Illustration',
    title: 'Japan House opens in mountainside to foster peak creativity.',
    description:
      'Enim omittam qui id, ex quo atqui dictas complectitur. Nec ad timeam accusata, hinc justo falli id eum, ferri novum molestie eos cu.',
    author: 'By Reta Torphy',
  },
  {
    image: '/images/post_image_2.png',
    tag: 'Photography',
    title: 'Helmut Lang celebrates taxi drivers worldwide in latest campaign',
    author: 'By Alessandra Ortiz',
  },
  {
    image: '/images/post_image_3.png',
    tag: 'Photography',
    title:
      'Bowlcut launch a new summer collection that pays homage to “UK legends”',
    author: 'By Rosanna Ondricka',
  },
  {
    image: '/images/post_image_4.png',
    tag: 'Photography',
    title:
      'Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn',
    author: 'By Annie Lueilwitz',
  },
  {
    image: '/images/post_image_5.png',
    tag: 'Interactive Design',
    title: 'London-based Yinka Ilori’s storytelling furniture',
    author: 'By Annie Lueilwitz',
  },
  {
    image: '/images/post_image_6.png',
    tag: 'Graphic Design',
    title:
      'Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck',
    author: 'By Simeon Brekke',
  },
  {
    image: '/images/post_image_7.png',
    tag: 'Architecture',
    title:
      'Suzanne Saroff’s meticulously arranged photographs alter perceptions',
    author: 'By Reta Torphy',
  },
]

const latestPosts = [
  {
    image: '/images/post_image_1.png',
    tag: 'Illustration',
    title: 'Japan House opens in mountainside to foster peak creativity.',
    author: 'By Reta Torphy',
  },
  {
    image: '/images/post_image_2.png',
    tag: 'Photography',
    title: 'Helmut Lang celebrates taxi drivers worldwide in latest campaign',
    author: 'By Alessandra Ortiz',
  },
  {
    image: '/images/post_image_3.png',
    tag: 'Photography',
    title:
      'Bowlcut launch a new summer collection that pays homage to “UK legends”',
    author: 'By Rosanna Ondricka',
  },
  {
    image: '/images/post_image_4.png',
    tag: 'Photography',
    title:
      'Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn',
    author: 'By Annie Lueilwitz',
  },
  {
    image: '/images/post_image_5.png',
    tag: 'Interactive Design',
    title: 'London-based Yinka Ilori’s storytelling furniture',
    author: 'By Annie Lueilwitz',
  },
  {
    image: '/images/post_image_6.png',
    tag: 'Graphic Design',
    title:
      'Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck',
    author: 'By Simeon Brekke',
  },
  {
    image: '/images/post_image_7.png',
    tag: 'Architecture',
    title:
      'Suzanne Saroff’s meticulously arranged photographs alter perceptions',
    author: 'By Reta Torphy',
  },
  {
    image: '/images/post_image_8.png',
    tag: 'Graphic Design',
    title:
      'Anu Ambasna’s playful illustrations celebrate club culture, brown bodies and perfect paunches',
    author: 'By Leo Bartell',
  },
]

const featuredPosts = [
  {
    image: '/images/featured_post_image_1.png',
    tag: 'Graphic Design',
    title: 'A Brief History of the FIFA World Cup Logo',
    author: 'By Clem Onojeghuo',
  },
  {
    image: '/images/featured_post_image_2.png',
    tag: 'Graphic Design',
    title:
      'Need a guide to LA’s graphic design scene? Shoplifters’ new issue has got your back',
    author: 'By Alessandra Ortiz',
  },
  {
    image: '/images/featured_post_image_3.png',
    tag: 'Photography',
    title: 'Fred Rowson directs film for Years and Years',
    author: 'By Coby Gottlieb',
  },
  {
    image: '/images/featured_post_image_4.png',
    tag: 'Illustration',
    title:
      'M&C Saatchi and Fontsmith collaborate on font collection for House of St Barnabas',
    author: 'By Annie Lueilwitz',
  },
]

function createPosts() {
  const postsContainer = document.querySelector<HTMLElement>(
    'section.posts .posts_container'
  )

  assert(postsContainer !== null)

  postsContainer.innerHTML += posts
    .map((post, postIndex) => {
      return `<a href="#!" class="post${postIndex === 0 ? ' first_post' : ''}">
  <div class="postImage_wrapper">
    <img class="post_image" src="${import.meta.env.BASE_URL + '/' + post.image}" />
  </div>
  <div class="post_content">
    <p class="post_tag">${post.tag}</p>
    <p class="post_title">
      ${post.title}
    </p>
    ${
      post.description
        ? `<p class="post_description">
      ${post.description}
    </p>`
        : ''
    }
    <p class="post_author">${post.author}</p>
  </div>
</a>`
    })
    .join('')
}

function createLatestPosts() {
  const postsContainer = document.querySelector<HTMLElement>(
    'section.latest_posts .posts_container'
  )

  assert(postsContainer !== null)

  postsContainer.innerHTML += latestPosts
    .map((post) => {
      return `<a href="#!" class="post latest_post">
  <div class="postImage_wrapper">
    <img class="post_image" src="${import.meta.env.BASE_URL + '/' + post.image}" />
  </div>
  <div class="post_content">
    <p class="post_tag">${post.tag}</p>
    <p class="post_title">
      ${post.title}
    </p>
    <p class="post_author">${post.author}</p>
  </div>
</a>`
    })
    .join('')
}

function createFeaturedPosts() {
  const postsContainer = document.querySelector<HTMLElement>(
    'section.featured_posts .posts_container'
  )

  assert(postsContainer !== null)

  postsContainer.innerHTML += featuredPosts
    .map((post) => {
      return `<a href="#!" class="post featured_post">
  <div class="postImage_wrapper">
    <img class="post_image" src="${import.meta.env.BASE_URL + '/' + post.image}" />
  </div>
  <div class="post_content">
    <p class="post_tag">${post.tag}</p>
    <p class="post_title">
      ${post.title}
    </p>
    <p class="post_author">${post.author}</p>
  </div>
</a>`
    })
    .join('')
}

// Combine 3 foo's to one
function createContent() {
  createPosts()
  createLatestPosts()
  createFeaturedPosts()
}

createContent()

const body = document.querySelector<HTMLButtonElement>('body')
const headerNav = document.querySelector<HTMLButtonElement>('#headerNav')
const burgerBtn = document.querySelector<HTMLButtonElement>('#burgerBtn')
assert(body !== null && headerNav !== null && burgerBtn !== null)
burgerBtn.addEventListener('click', () => {
  headerNav.classList.toggle('activeNav')
  body.classList.toggle('overflow-hidden')
})
