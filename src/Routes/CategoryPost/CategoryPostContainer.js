import React, { useState } from "react";
import CategoryPostPresenter from "./CategoryPostPresenter";
import { useQuery } from "@apollo/client";
import { GET_CATEGORY_POST_LIST, ADD_CATEGORIES } from "./CategoryPostQuerie";
import { LOCAL_LOGGED_IN_QUERY } from "../../sharedQueries";
import { useMutation } from "@apollo/react-hooks";
import Loading from "../../Components/Loading";
import { useInput } from "../../utils";

const CategoryPostContainer = (props) => {
    const result = props.match.params;
    const categoryId = result.category_id;
    console.log(categoryId);
    const { data, loading } = useQuery(GET_CATEGORY_POST_LIST, {
        variables: { categoryId: categoryId },
    });
    const [addCategoryMutation] = useMutation(ADD_CATEGORIES);
    const [submitting, setSubmitting] = useState(false);
    const category = useInput("");
    let posts;

    const {
        data: { isLoggedIn },
    } = useQuery(LOCAL_LOGGED_IN_QUERY);

    const clickFunc = async (e) => {
        if (submitting === false) {
            setSubmitting(true);
            const { addCategory: addCategoryResponse } =
                await addCategoryMutation({
                    variables: {
                        categoryTitle: category.value,
                    },
                });

            ////추후 useEffect로 카테고리 박스 리렌더링 방식 바꿀예정
            window.location.replace("/");

            console.log(addCategoryResponse);
        }
    };

    if (!loading) {
        const { getCategoryPostList: getCategoryPostListResponse } = data;

        if (getCategoryPostListResponse !== null) {
            posts = getCategoryPostListResponse.posts;
        }

        if (
            getCategoryPostListResponse.ok === true &&
            getCategoryPostListResponse.posts === null
        ) {
            posts = [];
        }
    } else {
        <Loading />;
    }

    return (
        <CategoryPostPresenter
            loading={loading}
            posts={posts}
            category={category}
            clickFunc={clickFunc}
            isLoggedIn={isLoggedIn}
        />
    );
};

export default CategoryPostContainer;
