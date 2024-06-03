import logo from '@/public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export const AboutMe = () => {
  return (
    <div className='container w-full px-5 m-auto mt-10 text-justify sm:px-0 sm:w-1/2 dark:text-gray-300 sm:mt-20'>
        <Image src={logo} width={400} className='m-auto mb-10'/>
        <p className='text-lg font-semibold tracking-wide dark:text-gray-300'>Unsaid Words is an online platform where you can express the thoughts and words that have gone unsaid. Whether playful, serious, nostalgic, or confessional, your words have a place here. You can choose to specify a recipient or remain completely anonymous.</p>
        <div className='mt-8 tracking-wide'>
            <h1 className='mb-5 text-3xl font-semibold dark:text-gray-300'>Why Must ?</h1>
            <p className='text-lg font-semibold dark:text-gray-300'>Life often unfolds in unexpected ways, leaving many things unsaid. Words meant for the past can remain unspoken due to unforeseen events. These unexpressed feelings can weigh heavily on us, sometimes hindering our ability to move forward.</p>
            <br />
            <p className='text-lg font-semibold dark:text-gray-300'>Sharing your thoughts, whether or not they are read, allows the world to know you have been spoken. Eventually, your message will be received, and you can find peace.</p>
            <br />
            <p className='text-lg font-semibold dark:text-gray-300'>Ready to share your unspoken thoughts? <Link className='text-red-600' href='/writes'>Click here</Link> to write your letter.</p>
        </div>
        <div className='mt-8 tracking-wide'>
            <h1 className='mb-5 text-3xl font-semibold dark:text-gray-300'>How It Works ?</h1>
            <p className='text-lg font-semibold dark:text-gray-300'>Write your anonymous thought <Link className='text-red-600' href='/writes'>here</Link>. You message will immediately posted in website. So please keep contain no offensive language or personal details.</p>
            <br />
            <p className='text-lg font-semibold dark:text-gray-300'>Be kind to yourself when engaging with the content. If you need mental health support, please visit Support Services page.</p>
        </div>
        <div className='mt-12 tracking-wide'>
            <h1 className='mb-5 text-3xl font-semibold dark:text-gray-300'>My Story ?</h1>
            <p className='text-lg font-medium dark:text-gray-300'>Hey wssup, my name is Daffa. I know there are many websites with similar features, but my purpose for creating Unsaid Words goes beyond that. I have a deep dedication to my IT career, and this project is part of my portfolio. More importantly, I created Unsaid Words because I missed the chance to express many things to my first love.</p>
            <br />
            <p className='text-lg font-medium dark:text-gray-300'>I late to realize how important the person is compared to the labels in a relationship. I should have focused more on loving and appreciating her rather than stressing over issues that only time could resolve. I often wish I could go back to our high school days when we only knew each other. We grew up with many problems, but unfortunately, I fixated on one issue that ruined everything. I have so many unsaid thoughts, words, and plans, but it is too late because of my own mistakes.</p>
            <br />
            <p className='text-lg font-medium dark:text-gray-300'>That is why I dedicate Unsaid Words to my story, which is a beautiful tragedy. I hope to always have the opportunity to express myself because I can't love the same way anymore.</p>
            <br />
            <p className='text-lg font-medium dark:text-gray-300'>Thank you, be kind to yourself, and always focus on the person before it is too late.</p>
        </div>
    </div>
  )
}
