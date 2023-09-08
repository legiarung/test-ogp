import React from 'react'
import { Helmet } from 'react-helmet-async';

export const Collectiton = () => {
    return (
        <div>
            <Helmet>
                <title>Tiêu đề Trang</title>
                <meta name="description" content="Mô tả trang cho SEO" />

                {/* Thẻ meta cho Facebook Open Graph */}
                <meta property="og:url" content="Collectiton" />
                <meta property="og:type" content="Collectiton" />
                <meta property="og:title" content="Collectiton" />
                <meta property="og:description" content="Collectiton" />
                <meta property="og:image" content="https://pbs.twimg.com/semantic_core_img/1569002597838725120/CYpebw4K?format=jpg&name=240x240" />

                {/* Thẻ meta cho Twitter */}
                <meta name="twitter:card" content="Collectiton" />
                <meta name="twitter:title" content="Collectiton" />
                <meta name="twitter:description" content="Collectiton" />
                <meta name="twitter:image" content="https://pbs.twimg.com/semantic_core_img/1569002597838725120/CYpebw4K?format=jpg&name=240x240" />

                {/* Thêm các thẻ meta khác tùy chỉnh nếu cần */}
            </Helmet>
            <div>CollectitonCollectitonCollectiton</div>
        </div>
    )
}
