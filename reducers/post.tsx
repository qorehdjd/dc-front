import { CustomError } from '@/types/error';
import { InittialState } from '@/types/post';
import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { HYDRATE } from 'next-redux-wrapper';

export const initialState: InittialState = {
  gallery: {
    name: '',
    content: '',
    writer: '',
    visitor: 0,
    singlePost: null,
    posts: [],
    lastPage: 0,
  },
  hasMorePosts: true,
  createGalleryLoading: false,
  createGalleryDone: false,
  createGalleryError: false,
  getGalleryLoading: false,
  getGalleryDone: false,
  getGalleryError: false,
  addPostLoading: false,
  addPostDone: false,
  addPostError: false,
  getPostsLoading: false,
  getPostsDone: false,
  getPostsError: false,
  getSearchPostsLoading: false,
  getSearchPostsDone: false,
  getSearchPostsError: false,
  getPostLoading: false,
  getPostDone: false,
  getPostError: false,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: false,
  addReplyCommentLoading: false,
  addReplyCommentDone: false,
  addReplyCommentError: false,
  deleteCommentLoading: false,
  deleteCommentDone: false,
  deleteCommentError: false,
  deleteReplyCommentLoading: false,
  deleteReplyCommentDone: false,
  deleteReplyCommentError: false,
  addLikeLoading: false,
  addLikeDone: false,
  addLikeError: false,
  addDislikeLoading: false,
  addDislikeDone: false,
  addDislikeError: false,
  comparePasswordLoading: false,
  comparePasswordDone: false,
  comparePasswordError: false,
  revisePostLoading: false,
  revisePostDone: false,
  revisePostError: false,
  deletePostLoading: false,
  deletePostDone: false,
  deletePostError: false,
};

export const createGallery = createAsyncThunk(
  'post/createGallery',
  async (data: { name: string; content: string }, thunkAPI) => {
    try {
      const response = await axios.post('/gallery', data);
      return response.data;
    } catch (err) {
      const customErr = err as CustomError;
      return thunkAPI.rejectWithValue(customErr.response?.data || customErr.message);
    }
  },
);

export const getGallery = createAsyncThunk('get/gallery', async (data: { id: string }, thunkAPI) => {
  try {
    const response = await axios.get(`/gallery?id=${data.id}`);
    return response.data;
  } catch (err) {
    const customErr = err as CustomError;
    return thunkAPI.rejectWithValue(customErr.response?.data || customErr.message);
  }
});

export const addPost = createAsyncThunk(
  'post/post',
  async (
    data: {
      galleryName: String;
      password: string;
      title: string;
      content: string;
    },
    thunkAPI,
  ) => {
    try {
      const response = await axios.post('/post', data);
      return response.data;
    } catch (err) {
      const customErr = err as CustomError;
      return thunkAPI.rejectWithValue(customErr.response?.data || customErr.message);
    }
  },
);

export const getPosts = createAsyncThunk(
  'get/posts',
  async (
    data: {
      pageNumber?: string;
      galleryName: string;
      optionName?: string;
      inputText?: string;
    },
    thunkAPI,
  ) => {
    try {
      const { pageNumber, galleryName, optionName, inputText } = data;
      const response = await axios.get(
        `/posts?galleryName=${galleryName}&optionName=${optionName}&inputText=${inputText}&pageNumber=${pageNumber}`,
      );
      return response.data;
    } catch (err) {
      const customErr = err as CustomError;
      return thunkAPI.rejectWithValue(customErr.response?.data || customErr.message);
    }
  },
);

export const getSearchPosts = createAsyncThunk(
  'get/searchPosts',
  async (
    data: {
      pageNumber?: string;
      galleryName: string;
      optionName: string;
      inputText: string;
    },
    thunkAPI,
  ) => {
    try {
      const { pageNumber, galleryName, optionName, inputText } = data;
      const response = await axios.get(
        `/posts/search?pageNumber=${pageNumber}&galleryName=${galleryName}&optionName=${optionName}&inputText=${inputText}`,
      );
      return response.data;
    } catch (err) {
      const customErr = err as CustomError;
      return thunkAPI.rejectWithValue(customErr.response?.data || customErr.message);
    }
  },
);

export const getPost = createAsyncThunk('get/post', async (postId: string, thunkAPI) => {
  try {
    const response = await axios.get(`/post/${postId}`);
    return response.data;
  } catch (err) {
    const customErr = err as CustomError;
    return thunkAPI.rejectWithValue(customErr.response?.data || customErr.message);
  }
});

export const addComment = createAsyncThunk(
  'post/Comment',
  async (
    data: {
      content: string;
      password: string;
      postId: string;
    },
    thunkAPI,
  ) => {
    try {
      const response = await axios.post(`/post/comment`, data);
      return response.data;
    } catch (err) {
      const customErr = err as CustomError;
      return thunkAPI.rejectWithValue(customErr.response?.data || customErr.message);
    }
  },
);

export const addReplyComment = createAsyncThunk(
  'post/ReplyComment',
  async (
    data: {
      content: string;
      password: string;
      commentId: string;
      nickname: string;
    },
    thunkAPI,
  ) => {
    try {
      const response = await axios.post(`/post/replyComment`, data);
      return response.data;
    } catch (err) {
      const customErr = err as CustomError;
      return thunkAPI.rejectWithValue(customErr.response?.data || customErr.message);
    }
  },
);

export const deleteComment = createAsyncThunk(
  'delete/comment',
  async ({ commentId, password }: { commentId: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.delete(`/post/comment/${commentId}/${password}`);
      return response.data;
    } catch (err) {
      const customErr = err as CustomError;
      return thunkAPI.rejectWithValue(customErr.response?.data || customErr.message);
    }
  },
);

export const deleteReplycomment = createAsyncThunk(
  'delete/replyComment',
  async ({ replyCommentId, password }: { replyCommentId: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.delete(`/post/replyComment/${replyCommentId}/${password}`);
      return response.data;
    } catch (err) {
      const customErr = err as CustomError;
      return thunkAPI.rejectWithValue(customErr.response?.data || customErr.message);
    }
  },
);

export const addLike = createAsyncThunk('post/like', async (postId: string, thunkAPI) => {
  try {
    const response = await axios.post(`/post/like/${postId}`);
    return response.data;
  } catch (err) {
    const customErr = err as CustomError;
    return thunkAPI.rejectWithValue(customErr.response?.data || customErr.message);
  }
});

export const addDisLike = createAsyncThunk('add/dislike', async (postId: string, thunkAPI) => {
  try {
    const response = await axios.post(`/post/dislike/${postId}`);
    return response.data;
  } catch (err) {
    const customErr = err as CustomError;
    return thunkAPI.rejectWithValue(customErr.response?.data || customErr.message);
  }
});

export const comparePassword = createAsyncThunk(
  'post/comparePassword',
  async (data: { postId: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post('/post/comparePassword', data);
      return response.data;
    } catch (err) {
      const customErr = err as CustomError;
      return thunkAPI.rejectWithValue(customErr.response?.data || customErr.message);
    }
  },
);

export const revisePost = createAsyncThunk(
  'revise/post',
  async (data: { title: string; content: string; postId: string }, thunkAPI) => {
    try {
      const response = await axios.patch('/post', data);
      return response.data;
    } catch (err) {
      const customErr = err as CustomError;
      return thunkAPI.rejectWithValue(customErr.response?.data || customErr.message);
    }
  },
);

export const deletePost = createAsyncThunk(
  'delete/post',
  async ({ postId, password }: { postId: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.delete(`/post/${postId}/${password}`);
      return response.data;
    } catch (err) {
      const customErr = err as CustomError;
      return thunkAPI.rejectWithValue(customErr.response?.data || customErr.message);
    }
  },
);

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(HYDRATE, (state, action: AnyAction) => ({
        ...state,
        ...action.payload.post,
      }))
      .addCase(createGallery.pending, (state) => {
        state.createGalleryLoading = true;
        state.createGalleryDone = false;
        state.createGalleryError = false;
      })
      .addCase(createGallery.fulfilled, (state, action) => {
        state.createGalleryLoading = false;
        state.createGalleryDone = true;
      })
      .addCase(createGallery.rejected, (state, action) => {
        state.createGalleryLoading = false;
        state.createGalleryError = action.payload;
      })
      .addCase(getGallery.pending, (state) => {
        state.getGalleryLoading = true;
        state.getGalleryDone = false;
        state.getGalleryError = false;
      })
      .addCase(getGallery.fulfilled, (state, action) => {
        state.getGalleryLoading = false;
        state.getGalleryDone = true;
        state.gallery = action.payload;
      })
      .addCase(getGallery.rejected, (state, action) => {
        state.getGalleryLoading = false;
        state.getGalleryError = action.payload;
      })
      .addCase(addPost.pending, (state) => {
        state.addPostLoading = true;
        state.addPostDone = false;
        state.addPostError = false;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.addPostLoading = false;
        state.addPostDone = true;
        state.addPostError = false;
      })
      .addCase(addPost.rejected, (state, action) => {
        state.addPostLoading = false;
        state.addPostError = action.payload;
      })
      .addCase(getPosts.pending, (state) => {
        state.getPostsLoading = true;
        state.getPostsDone = false;
        state.getPostsError = false;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.getPostsLoading = false;
        state.getPostsDone = true;
        state.gallery.posts = action.payload.posts;
        state.gallery.lastPage = action.payload.lastPage;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.getPostsLoading = false;
        state.getPostsError = action.payload;
      })
      .addCase(getSearchPosts.pending, (state) => {
        state.getSearchPostsLoading = true;
        state.getSearchPostsDone = false;
        state.getSearchPostsError = false;
      })
      .addCase(getSearchPosts.fulfilled, (state, action) => {
        state.getSearchPostsLoading = false;
        state.getSearchPostsDone = true;
        state.gallery.posts = action.payload.posts;
        state.gallery.lastPage = action.payload.lastPage;
      })
      .addCase(getSearchPosts.rejected, (state, action) => {
        state.getSearchPostsLoading = false;
        state.getSearchPostsError = action.payload;
      })
      .addCase(getPost.pending, (state) => {
        state.getPostLoading = true;
        state.getPostDone = false;
        state.getPostError = false;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.getPostLoading = false;
        state.getPostDone = true;
        state.gallery.singlePost = action.payload;
      })
      .addCase(getPost.rejected, (state, action) => {
        state.getPostLoading = false;
        state.getPostError = action.payload;
      })
      .addCase(addComment.pending, (state) => {
        state.addCommentLoading = true;
        state.addCommentDone = false;
        state.addCommentError = false;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.addCommentLoading = false;
        state.addCommentDone = true;
        state.gallery.singlePost?.comments.unshift(action.payload);
      })
      .addCase(addComment.rejected, (state, action) => {
        state.addCommentLoading = false;
        state.addCommentError = action.payload;
      })
      .addCase(addReplyComment.pending, (state) => {
        state.addReplyCommentLoading = true;
        state.addReplyCommentDone = false;
        state.addReplyCommentError = false;
      })
      .addCase(addReplyComment.fulfilled, (state, action) => {
        state.addReplyCommentLoading = false;
        state.addReplyCommentDone = true;
        const findIndex = state.gallery.singlePost?.comments.findIndex((comment) => comment._id === action.payload._id);
        state.gallery.singlePost?.comments
          .find((v, i) => i === findIndex)
          ?.replyComments.push(action.payload.replyComments[action.payload.replyComments.length - 1]);
      })
      .addCase(addReplyComment.rejected, (state, action) => {
        state.addReplyCommentLoading = false;
        state.addReplyCommentError = action.payload;
      })
      .addCase(deleteComment.pending, (state) => {
        state.deleteCommentLoading = true;
        state.deleteCommentDone = false;
        state.deleteCommentError = false;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.deleteCommentLoading = false;
        state.deleteCommentDone = true;
        if (state.gallery.singlePost) {
          const commentIndex = state.gallery.singlePost.comments.findIndex(
            (comment) => comment._id === action.payload.commentId,
          );
          state.gallery.singlePost.comments.splice(commentIndex, 1);
        }
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.deleteCommentLoading = false;
        state.deleteCommentError = action.payload;
      })
      .addCase(deleteReplycomment.pending, (state) => {
        state.deleteReplyCommentLoading = true;
        state.deleteReplyCommentDone = false;
        state.deleteReplyCommentError = false;
      })
      .addCase(deleteReplycomment.fulfilled, (state, action) => {
        state.deleteReplyCommentLoading = false;
        state.deleteReplyCommentDone = true;
        const comment = state.gallery.singlePost?.comments.find((comment) => comment._id === action.payload.commentId);
        const replyCommentIndex = comment?.replyComments.findIndex(
          (replyComment) => replyComment._id === action.payload.replyCommentId,
        );
        if (replyCommentIndex !== undefined) {
          comment?.replyComments.splice(replyCommentIndex, 1);
        }
      })
      .addCase(deleteReplycomment.rejected, (state, action) => {
        state.deleteReplyCommentLoading = false;
        state.deleteReplyCommentError = action.payload;
      })
      .addCase(addLike.pending, (state) => {
        state.addLikeLoading = true;
        state.addLikeDone = false;
        state.addLikeError = false;
      })
      .addCase(addLike.fulfilled, (state, action) => {
        state.addLikeLoading = false;
        state.addLikeDone = true;
        state.gallery.singlePost?.liker.push({
          nickname: action.payload.nickname,
        });
      })
      .addCase(addLike.rejected, (state, action) => {
        state.addLikeLoading = false;
        state.addLikeError = action.payload;
      })
      .addCase(addDisLike.pending, (state) => {
        state.addDislikeLoading = true;
        state.addDislikeDone = false;
        state.addDislikeError = false;
      })
      .addCase(addDisLike.fulfilled, (state, action) => {
        state.addDislikeLoading = false;
        state.addDislikeDone = true;
        state.gallery.singlePost?.disliker.push({
          nickname: action.payload.nickname,
        });
      })
      .addCase(addDisLike.rejected, (state, action) => {
        state.addDislikeLoading = false;
        state.addDislikeError = action.payload;
      })
      .addCase(comparePassword.pending, (state) => {
        state.comparePasswordLoading = true;
        state.comparePasswordDone = false;
        state.comparePasswordError = false;
      })
      .addCase(comparePassword.fulfilled, (state, action) => {
        state.comparePasswordLoading = false;
        state.comparePasswordDone = true;
      })
      .addCase(comparePassword.rejected, (state, action) => {
        state.comparePasswordLoading = false;
        state.comparePasswordError = action.payload;
      })
      .addCase(revisePost.pending, (state) => {
        state.revisePostLoading = true;
        state.revisePostDone = false;
        state.revisePostError = false;
      })
      .addCase(revisePost.fulfilled, (state, action) => {
        state.revisePostLoading = false;
        state.revisePostDone = true;
        const postIndex = state.gallery.posts.findIndex((post) => post._id === action.payload._id);
        state.gallery.posts.splice(postIndex, 1, action.payload);
        if (state.gallery.singlePost) {
          state.gallery.singlePost.title = action.payload.title;
          state.gallery.singlePost.content = action.payload.content;
        }
      })
      .addCase(revisePost.rejected, (state, action) => {
        state.revisePostLoading = false;
        state.revisePostError = action.payload;
      })
      .addCase(deletePost.pending, (state) => {
        state.deletePostLoading = true;
        state.deletePostDone = false;
        state.deletePostError = false;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.deletePostLoading = false;
        state.deletePostDone = true;
        const postIndex = state.gallery.posts.findIndex((post) => post._id === action.payload._id);
        state.gallery.posts.splice(postIndex, 1);
        state.gallery.singlePost = null;
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.deletePostLoading = false;
        state.deletePostError = action.payload;
      }),
});

export default postSlice;
