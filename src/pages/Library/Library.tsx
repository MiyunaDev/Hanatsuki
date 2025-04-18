import Flag from 'react-world-flags'
import LanguageEnum from '../../enums/LanguageEnum'

const library: Array<{
    title: string,
    language: LanguageEnum,
    cover: string
}> = [
        {
            title: "Gochumon wa usagi desuga. Season 2",
            language: LanguageEnum.INDONESIA,
            cover: "https://cdn.discordapp.com/attachments/847678573040631818/1070984388612993024/Gochuumon_wa_Usagi_desu_ka_.jpg?ex=6802b630&is=680164b0&hm=a7bf4480a2cc0f098f7754ba7847e4d936ae7ed3f0d41c73640a470b29faa5b0&"
        },
        {
            title: "Gochumon wa usagi desuga. Season 2",
            language: LanguageEnum.INDONESIA_DUB,
            cover: "https://cdn.discordapp.com/attachments/847678573040631818/1070984388612993024/Gochuumon_wa_Usagi_desu_ka_.jpg?ex=6802b630&is=680164b0&hm=a7bf4480a2cc0f098f7754ba7847e4d936ae7ed3f0d41c73640a470b29faa5b0&"
        },
        {
            title: "Gochumon wa usagi desuga. Season 2",
            language: LanguageEnum.ENGLISH,
            cover: "https://cdn.discordapp.com/attachments/847678573040631818/1070984388612993024/Gochuumon_wa_Usagi_desu_ka_.jpg?ex=6802b630&is=680164b0&hm=a7bf4480a2cc0f098f7754ba7847e4d936ae7ed3f0d41c73640a470b29faa5b0&"
        },
        {
            title: "Gochumon wa usagi desuga. Season 2",
            language: LanguageEnum.JAPANESE_DUB,
            cover: "https://cdn.discordapp.com/attachments/847678573040631818/1070984388612993024/Gochuumon_wa_Usagi_desu_ka_.jpg?ex=6802b630&is=680164b0&hm=a7bf4480a2cc0f098f7754ba7847e4d936ae7ed3f0d41c73640a470b29faa5b0&"
        }
    ]

const Library = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 sm:gap-4 max-w-screen-xl mx-auto px-2">
            {library.map((detail, index) => (
                <div key={index} className="flex flex-col w-full min-w-[120px] max-w-[180px] mx-auto">
                    <p className="rounded-t-2xl text-xs sm:text-sm p-1 text-center bg-[#C667F7]">Anime</p>

                    <div className="relative w-full">
                        <p className="absolute text-xs top-1 right-1 rounded-3xl bg-[#C667F7] p-1">
                            12
                        </p>
                        <img
                            className="w-full aspect-[2/3] sm:aspect-[3/4] object-cover bg-gray-300 rounded-b-lg"
                            src={detail.cover}
                            alt={detail.title}
                        />
                    </div>
                    <a className='w-full text-sm font-bold text-center pt-1 line-clamp-1'>Anilist</a>
                    <a className="w-full text-xs sm:text-sm font-semibold text-center py-0.5 line-clamp-2">
                        {detail.title}
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Library