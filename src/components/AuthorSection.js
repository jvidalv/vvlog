import React, {useEffect, useState} from "react";
import {LoadingPlaceholder, P} from "../styles/GenericStyles";
import {AuthorPhoto, AuthorWithImageExtendedDiv} from "./AuthorSectionStyle";
import {useGlobals} from "../contexts/Global";
import BASE_IMAGE, {images_url} from "../constants/Images";
import useT from "../helpers/Translator";

const useAuthor = () => {
    const [{aArticle, authors}] = useGlobals();
    const [author, setAuthor] = useState({});

    useEffect(() => {
        if (aArticle.id && authors[aArticle.user_id]) {
            setAuthor(authors[aArticle.user_id]);
        }
    }, [aArticle, authors]);

    return {author};
};

/**
 * Author with image simple
 * @returns {*}
 * @constructor
 */
export function AuthorSimple() {
    const [{aArticle}] = useGlobals();
    const {author} = useAuthor();

    return (
        <div className="d-flex align-items-center justify-content-center">
            <P className="mb-0">
                {author.name ? `${author.name} ♥ ` : <LoadingPlaceholder width="100px" height="25px"/>}
            </P>
            <P className="mt-0 pl-1" color="secondary2">
                <span className="text-capitalize pr-1">{aArticle.date_nice}</span>
                · {useT('min_read', [aArticle.time_to_read])}
            </P>
        </div>
    );
}

/**
 * Author with image simple
 * @returns {*}
 * @constructor
 */
export function AuthorWithImage() {
    const [{aArticle}] = useGlobals();
    const {author} = useAuthor();

    return (
        <div className="d-flex align-items-center justify-content-center">
            <AuthorPhoto src={author.image ? BASE_IMAGE + author.image : images_url(75, 75).user} width="75"
                         height="75"/>
            <div className="ml-3">
                <P className="mb-0" big>
                    {author.name ? `${author.name} ❤` : <LoadingPlaceholder width="125px" height="30px"/>}
                </P>
                <P className="mt-0" color="secondary2">
                    <span className="text-capitalize pr-1">{aArticle.date_nice}</span>
                    · {useT('min_read', [aArticle.time_to_read])}
                </P>
            </div>
        </div>
    );
}

/**
 * Author with image extended with description and such
 * @param props
 * @returns {*}
 * @constructor
 */
export function AuthorWithImageExtended(props) {
    const [{language}] = useGlobals();
    const {author} = useAuthor();
    return (
        <AuthorWithImageExtendedDiv className="d-flex py-5 my-2">
            <AuthorPhoto
                className="align-self-baseline"
                src={author.image ? BASE_IMAGE + author.image : images_url(95, 95).user}
                width="95"
                height="95"
            />
            <div className="ml-3">
                <P className="my-0 text-uppercase" color="onBackground" muted>
                    {useT('written_by')}
                </P>
                <P className="mb-0" big>
                    {author.name ? `${author.name}` : <LoadingPlaceholder width="150px" height="25px"/>}
                </P>
                <P className="mb-0 mt-2" color="onBackground">
                    {author.info && author.info[language] ? `${author.info[language].information}` :
                        <LoadingPlaceholder width="300px" height="25px"/>}
                </P>
            </div>
        </AuthorWithImageExtendedDiv>
    );
}
