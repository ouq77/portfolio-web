const path = require('path')
const { persist, resize, getImageName, getResizedImageName, getAbsoluteImageOriginalPath, getRelativeImageResizedPath, isResizedImageExists } = require('./../helpers')

const relativeImagePath = 'assets/images/codeschool'
const imageBasePath = path.resolve(__dirname, `../../app/${relativeImagePath}`)

const fetchBadge = (course, imageFetchPromises) => {
  const imageName = getImageName(course.badge)
  const absoluteImageOriginalPath = getAbsoluteImageOriginalPath(imageBasePath, imageName)
  if (!isResizedImageExists(absoluteImageOriginalPath)) {
    imageFetchPromises.push(persist(course.badge, absoluteImageOriginalPath))
  }
}

const processBadge = (course, imagePromises) => {
  const imageName = getImageName(course.badge)
  imagePromises.push(resize(course.badge, imageBasePath))
  imagePromises.push(resize(course.badge, imageBasePath, 190, 190))
  course.badge = getRelativeImageResizedPath(relativeImagePath, getResizedImageName(imageName))
  course.badge2x = getRelativeImageResizedPath(relativeImagePath, getResizedImageName(imageName, 190, 190))
}

const resizeReplace = jsonResponse => {
  const imageFetchPromises = []
  const courses = [].concat(jsonResponse.courses.completed)
    .concat(jsonResponse.courses.in_progress)
  courses.forEach(course => {
    fetchBadge(course, imageFetchPromises)
  })

  return Promise.all(imageFetchPromises)
    .then(() => {
      const imageResizePromises = []
      courses.forEach(course => {
        processBadge(course, imageResizePromises)
      })

      return Promise.all(imageResizePromises)
        .then(() => jsonResponse)
    })
    .catch(e => e)
}

module.exports.resizeReplace = resizeReplace
