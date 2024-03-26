export interface ReplyComments {
  _id: string;
  nickname: string;
  content: string;
  password: string;
  createDate: string;
  commentId: string;
}

export interface Comments {
  nickname: string;
  content: string;
  createDate: string;
  password: string;
  postId: string;
  replyComments: ReplyComments[];
  _id: string;
}

interface Writer {
  _id: string;
  id: string;
  nickname: string;
  likePost: [] | { nickname: string }[];
  dislikePost: [] | { nickname: string }[];
}

interface Post {
  id: number;
  _id: string;
  galleryName: string;
  title: string;
  content: string;
  writer: Writer;
  password: string;
  image: { _id: string }[];
  liker: { nickname: string }[];
  disliker: { nickname: string }[];
  visitor: number;
  comments: Comments[];
  createDate: string;
}

export interface InittialState {
  gallery: {
    name: string;
    content: string;
    writer: string;
    visitor: number;
    singlePost: Post | null;
    posts: Post[];
    lastPage: number;
  };
  hasMorePosts: boolean;
  createGalleryLoading: boolean;
  createGalleryDone: boolean;
  createGalleryError: boolean | any;
  getGalleryLoading: boolean;
  getGalleryDone: boolean;
  getGalleryError: boolean | string | any;
  addPostLoading: boolean;
  addPostDone: boolean;
  addPostError: boolean | string | any;
  getPostsLoading: boolean;
  getPostsDone: boolean;
  getPostsError: boolean | any;
  getSearchPostsLoading: boolean;
  getSearchPostsDone: boolean;
  getSearchPostsError: boolean | any;
  getPostLoading: boolean;
  getPostDone: boolean;
  getPostError: boolean | any;
  addCommentLoading: boolean;
  addCommentDone: boolean;
  addCommentError: boolean | string | any;
  addReplyCommentLoading: boolean;
  addReplyCommentDone: boolean;
  addReplyCommentError: boolean | string | any;
  deleteCommentLoading: boolean;
  deleteCommentDone: boolean;
  deleteCommentError: boolean | string | any;
  deleteReplyCommentLoading: boolean;
  deleteReplyCommentDone: boolean;
  deleteReplyCommentError: boolean | string | any;
  addLikeLoading: boolean;
  addLikeDone: boolean;
  addLikeError: boolean | string | any;
  addDislikeLoading: boolean;
  addDislikeDone: boolean;
  addDislikeError: boolean | string | any;
  comparePasswordLoading: boolean;
  comparePasswordDone: boolean;
  comparePasswordError: boolean | string | any;
  revisePostLoading: boolean;
  revisePostDone: boolean;
  revisePostError: boolean | string | any;
  deletePostLoading: boolean;
  deletePostDone: boolean;
  deletePostError: boolean | string | any;
}
