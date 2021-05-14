import React from "react";
import styled from "styled-components";
import { LOCAL_LOGGED_IN_QUERY, GET_CATEGORIES } from "../sharedQueries";
import { useQuery } from "@apollo/client";
import Loading from "./Loading";

const CategoriesBox = styled.div`
    height: 50%;
`;

const CategoryBox = styled.div`
    font-size: 8px;
`;

const MarginBox = styled.div`
    margin-bottom: 10px;
`;

const AtagForm = styled.a`
    color: inherit;
    text-decoration: none;
`;

const Categories = () => {
    const {
        data: { isLoggedIn },
    } = useQuery(LOCAL_LOGGED_IN_QUERY);

    const { data, loading } = useQuery(GET_CATEGORIES);

    let categories;

    if (!loading) {
        const { getUserCategories: getUserCategoriesResponse } = data;

        if (getUserCategoriesResponse.ok === true) {
            categories = getUserCategoriesResponse.categories;
        }

        if (
            getUserCategoriesResponse.ok === true &&
            getUserCategoriesResponse.categories === null
        ) {
            categories = [];
        }
    } else {
        <Loading />;
    }

    return (
        <React.Fragment>
            {loading ? (
                <Loading />
            ) : (
                <CategoriesBox>
                    {categories.map((dictObj, index) => {
                        return (
                            <MarginBox key={index}>
                                <CategoryBox>
                                    <AtagForm
                                        href={
                                            "/youhaveselectedcategory/" +
                                            dictObj.categoryId
                                        }
                                    >
                                        {dictObj.categoryTitle}
                                    </AtagForm>
                                </CategoryBox>
                            </MarginBox>
                        );
                    })}
                </CategoriesBox>
            )}
        </React.Fragment>
    );
};

export default Categories;
