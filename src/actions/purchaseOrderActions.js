import {
    FILTER_DATA_BY_ALPHABETIC_PO,
    FILTER_DATA_BY_SEARCH_SN_PO,
    axios,
    config
    } from './types'


    export const handleSearchFilterByAlpha = (data, data1)=>{
        //   if()
          return{
              type:FILTER_DATA_BY_SEARCH_SN_PO,
              searchDataPO:data
          }
      }
      export const handleAplhabetFilterBySN = (data, data1)=>{
        //   if()
          return{
              type:FILTER_DATA_BY_ALPHABETIC_PO,
              alphaDataPO:data
          }
      }