export interface loadedPostInterface {
  title: string
  updatedDate: string | Date
  author: string
  content: string
  previewText: string
  thumbnail: string
  id: string
}
export class Post {
  title: string | undefined
  updatedDate: string | Date | undefined
  author: string | undefined
  content: string | undefined
  previewText: string | undefined
  thumbnail: string | undefined
  id: string | undefined
}
