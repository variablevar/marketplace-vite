import { NFTS_ENDPOINT } from "../../../constants/endpoints";
import api from "../../../core/api";
import { Axios, Canceler } from "../../../core/axios";
import * as actions from "../../actions";
import { getHeaders } from "../helper";

export const fetchNftsBreakdown = (page) => async (dispatch, getState) => {
  //access the state
  const state = getState();
  console.log(state);

  dispatch(actions.getNftBreakdown.request(Canceler.cancel));

  try {
    const { data } = await Axios.get(`${api.baseUrl}${api.nfts}`, {
      cancelToken: Canceler.token,
      params: {
        page: page
      },
      ...getHeaders(),
    });

    dispatch(actions.getNftBreakdown.success(data.data));
  } catch (err) {
    dispatch(actions.getNftBreakdown.failure(err));
  }
};

export const fetchNftsAuthorBreakdown =
  (authorId) => async (dispatch, getState) => {
    //access the state
    const state = getState();
    console.log(state);

    dispatch(actions.getNftBreakdown.request(Canceler.cancel));

    try {
      const { data } = await Axios.get(`${api.baseUrl}${api.nfts}`, {
        cancelToken: Canceler.token,
        params: {
          owner: authorId,
        },
        ...getHeaders(),
      });

      dispatch(actions.getNftBreakdown.success(data));
    } catch (err) {
      dispatch(actions.getNftBreakdown.failure(err));
    }
  };

export const fetchNftsCollectionBreakdown =
  (collectionId) => async (dispatch, getState) => {
    //access the state
    const state = getState();
    console.log(state);

    dispatch(actions.getNftBreakdown.request(Canceler.cancel));

    try {
      const { data } = await Axios.get(`${api.baseUrl}${api.nfts}`, {
        cancelToken: Canceler.token,
        params: {
          collection: collectionId,
        },
        ...getHeaders(),
      });

      dispatch(actions.getNftBreakdown.success(data));
    } catch (err) {
      dispatch(actions.getNftBreakdown.failure(err));
    }
  };

export const fetchNftShowcase = () => async (dispatch) => {
  dispatch(actions.getNftShowcase.request(Canceler.cancel));

  try {
    const { data } = await Axios.get(`${api.baseUrl}${api.nftShowcases}`, {
      cancelToken: Canceler.token,
      params: {},
      ...getHeaders(),
    });

    dispatch(actions.getNftShowcase.success(data));
  } catch (err) {
    dispatch(actions.getNftShowcase.failure(err));
  }
};

export const fetchNftDetail = (nftId, tokenId) => async (dispatch) => {
  dispatch(actions.getNftDetail.request(Canceler.cancel));

  try {
    const { data } = await Axios.get(`${api.baseUrl}${NFTS_ENDPOINT}`, {
      cancelToken: Canceler.token,
      params: {
        id: `${nftId}/${tokenId}`,
      },
      ...getHeaders(),
    });

    dispatch(actions.getNftDetail.success(data));
  } catch (err) {
    dispatch(actions.getNftDetail.failure(err));
  }
};
