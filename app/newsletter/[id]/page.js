import {getPostData} from "@/lib/postFormat";
import Navbar from "@/Components/navbar";

export async function generateMetadata({params}) {
    const postData = await getPostData(params.id);

    return {
        title: postData.title
    };
}

// -< Post >-
export default async function Post({params}) {
    const postData = await getPostData(params.id);

    return (
        <>
            <Navbar/>
            {/* Post Title */}
            <div className={'my-10 mx-36'}>
                <h1 className="font-semibold text-5xl mb-10 text-center">{postData.title}</h1>

                {/* Post Content */}
                <div
                    className="flex flex-col text-gray-800 text-lg gap-7"
                    dangerouslySetInnerHTML={{__html: postData.contentHtml}}
                />
            </div>
        </>
    );
}


