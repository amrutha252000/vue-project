var names = ['Matt Maribojoc', 'Lebron James', 'Bill Gates', 'Childish Gambino']
const getPosts = (number) => {
  //a database call or algorithm

  let ret = []

  for (var i = 0; i < number; i++) {
    ret.push({
      author: names[i % names.length],
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    })
  }

  return ret
}

export default getPosts
