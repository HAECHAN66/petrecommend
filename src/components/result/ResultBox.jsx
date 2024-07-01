import React from "react";
import styled from "@emotion/styled";
import { resultComments } from "../../constants/comments";

const ResultBox = ({ type }) => {
    const data = resultComments.filter(({ name }) => name === type)[0];

    return (
        <Container>
            <TagList>
                {data.tags.map((tag) => (
                    <Tag>{tag}</Tag>
                ))}
            </TagList>
            <Comment>{data.comment}</Comment>
        </Container>
    );
};

const Container = styled.div`
    box-sizing: border-box;
    width: 300px;
    height: 260px;
    max-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 18px;
    align-items: center;
    border-radius: 10px;
    background-color: var(--white-bg);
    margin-bottom: 50px;
    padding: 20px;
`;

const TagList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
`;

const Tag = styled.li`
    font-size: 14px;
    color: #ccc;
`;

const Comment = styled.span`
    font-size: 14px;
    line-height: 18px;
`;

export default ResultBox;
