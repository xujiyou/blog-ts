import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from './types';
import {article_store} from "@/store/module/article/article_store";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {},
    actions: {},
    mutations: {},
    modules: {
        article_store
    }
};

export default new Vuex.Store<RootState>(store);
