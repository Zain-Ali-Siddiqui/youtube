import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ReactPlayer from 'react-player'
import Draw from './drawer'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LikeOutlined, LikeFilled, DislikeOutlined, DislikeFilled } from '@ant-design/icons';
import { useState } from 'react';
function Player() {
    const [likes, setLikes] = useState(true)
    const [dislike, setDislikes] = useState(true)
    const [lik, setLik] = useState(true)
    const [dislik, setDislik] = useState(true)
    const [likees, setLikees] = useState(true)
    const [dislikes, setDislike] = useState(true)
    const [data, setData] = useState([])
    const location = useLocation();
    const like = () => {
        setLikes(false)
        setDislikes(true)
    }
    const dis = () => {
        setLikes(true)
        setDislikes(true)
    }
    const disl = () => {
        setDislikes(false)
        setLikes(true)
    }
    const disli = () => {
        setDislikes(true)
        setLikes(true)
    }
    const lik1 = () => {
        setLik(false)
        setDislik(true)
    }
    const dis1 = () => {
        setLik(true)
        setDislik(true)
    }
    const dis2 = () => {
        setDislik(false)
        setLik(true)
    }
    const dis3 = () => {
        setDislik(true)
        setLik(true)
    }
    const like1 = () => {
        setLikees(false)
        setDislike(true)
    }
    const disl1 = () => {
        setLikees(true)
        setDislike(true)
    }
    const disl2 = () => {
        setDislike(false)
        setLikees(true)
    }
    const disl3 = () => {
        setDislike(true)
        setLikees(true)
    }

    const ul = document.getElementById('ul')
    const li = document.getElementById('li')
    const u = document.getElementById('u')
    const i = document.getElementById('i')
    const il = document.getElementById('il')
    const lu = document.getElementById('lu')
    const chang = () => {
        ul.style.backgroundColor = 'black'
        ul.style.color = 'white'
        li.style.backgroundColor = 'white'
        li.style.color = 'black'
        lu.style.backgroundColor = 'white'
        lu.style.color = 'black'
        il.style.backgroundColor = 'white'
        il.style.color = 'black'
        u.style.backgroundColor = 'white'
        u.style.color = 'black'
        i.style.backgroundColor = 'white'
        i.style.color = 'black'
    }
    const chan = () => {
        li.style.backgroundColor = 'black'
        li.style.color = 'white'
        ul.style.backgroundColor = 'white'
        ul.style.color = 'black'
        lu.style.backgroundColor = 'white'
        lu.style.color = 'black'
        il.style.backgroundColor = 'white'
        il.style.color = 'black'
        u.style.backgroundColor = 'white'
        u.style.color = 'black'
        i.style.backgroundColor = 'white'
        i.style.color = 'black'
    }
    const changs = () => {
        lu.style.backgroundColor = 'black'
        lu.style.color = 'white'
        ul.style.backgroundColor = 'white'
        ul.style.color = 'black'
        li.style.backgroundColor = 'white'
        li.style.color = 'black'
        il.style.backgroundColor = 'white'
        il.style.color = 'black'
        u.style.backgroundColor = 'white'
        u.style.color = 'black'
        i.style.backgroundColor = 'white'
        i.style.color = 'black'
    }
    const chans = () => {
        il.style.backgroundColor = 'black'
        il.style.color = 'white'
        ul.style.backgroundColor = 'white'
        ul.style.color = 'black'
        lu.style.backgroundColor = 'white'
        lu.style.color = 'black'
        li.style.backgroundColor = 'white'
        li.style.color = 'black'
        u.style.backgroundColor = 'white'
        u.style.color = 'black'
        i.style.backgroundColor = 'white'
        i.style.color = 'black'
    }
    const change = () => {
        u.style.backgroundColor = 'black'
        u.style.color = 'white'
        ul.style.backgroundColor = 'white'
        ul.style.color = 'black'
        lu.style.backgroundColor = 'white'
        lu.style.color = 'black'
        li.style.backgroundColor = 'white'
        li.style.color = 'black'
        li.style.backgroundColor = 'white'
        li.style.color = 'black'
        i.style.backgroundColor = 'white'
        i.style.color = 'black'
    }
    const chag = () => {
        i.style.backgroundColor = 'black'
        i.style.color = 'white'
        ul.style.backgroundColor = 'white'
        ul.style.color = 'black'
        lu.style.backgroundColor = 'white'
        lu.style.color = 'black'
        il.style.backgroundColor = 'white'
        il.style.color = 'black'
        u.style.backgroundColor = 'white'
        u.style.color = 'black'
        li.style.backgroundColor = 'white'
        li.style.color = 'black'
    }
    let Video = [
        {
            vid: 'https://i.ytimg.com/vi/LIC3hNt6yYo/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhEIFsocjAP&rs=AOn4CLAr_HwCcmk2vlfvs89DQQ_v7JOuyw',
            text: <Link style={{ color: 'black', textDecoration: 'none' }} to={{ pathname: 'https://youtu.be/LIC3hNt6yYo' }} state={{ data: data }}>Uska Hi Bana 💔  [Slowed + Reverb]  Arijit </Link>
        },
        {
            vid: 'https://i.ytimg.com/vi/lxIA1r4QOSI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPgpFGNCEpLsfFfCIuQV86HC7g3w',
            text: <Link style={{ color: 'black', textDecoration: 'none' }} to={{ pathname: 'https://youtu.be/N2WcCQhcygk' }} state={{ data: data }}>Barish Me Phass Gae 💔 Lahore to Islamabad </Link>
        },
        {
            vid: 'https://i.ytimg.com/vi/jwhG6pO09YU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFfNgHg4fWwP70_7fsEwSxtsrKpg',
            text: <Link style={{ color: 'black', textDecoration: 'none' }} to={{ pathname: 'https://youtu.be/z_xZMSC-mCk' }} state={{ data: data }}>Bol Do Na Zara [Slowed + Reverb] Armaan  </Link>
        },
        {
            vid: 'https://i.ytimg.com/vi/n3tlPnxhyyk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZNI0D4Gpi09_Qc5ibZ40bWDDI7A',
            text: <Link style={{ color: 'black', textDecoration: 'none' }} to={{ pathname: 'https://youtu.be/n3tlPnxhyyk' }} state={{ data: data }}>$50,000 UC SPEND ON SCARL FULL MAX 😍 </Link>
        }
        ,
        {
            vid: 'https://i.ytimg.com/vi/dI2WFrDWns4/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIEkoRjAP&rs=AOn4CLAwkzHObmH0hOXIFqtXNgie0P8IUw',
            text: <Link style={{ color: 'black', textDecoration: 'none' }} to={{ pathname: 'https://youtu.be/CCa780IfKX8' }} state={{ data: data }}>Sawan aya hai ( Slowed & Reverb ) Bollywood Romantic Lofi Song</Link>
        }
        ,
        {
            vid: 'https://i.ytimg.com/vi/lxIA1r4QOSI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPgpFGNCEpLsfFfCIuQV86HC7g3w',
            text: <Link style={{ color: 'black', textDecoration: 'none' }} to={{ pathname: 'https://youtu.be/N2WcCQhcygk' }} state={{ data: data }}>Barish Me Phass Gae 💔 Lahore to Islamabad </Link>
        },
        {
            vid: 'https://i.ytimg.com/vi/jwhG6pO09YU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFfNgHg4fWwP70_7fsEwSxtsrKpg',
            text: <Link style={{ color: 'black', textDecoration: 'none' }} to={{ pathname: 'https://youtu.be/z_xZMSC-mCk' }} state={{ data: data }}>Bol Do Na Zara [Slowed + Reverb] Armaan  </Link>
        },
        {
            vid: 'https://i.ytimg.com/vi/n3tlPnxhyyk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZNI0D4Gpi09_Qc5ibZ40bWDDI7A',
            text: <Link style={{ color: 'black', textDecoration: 'none' }} to={{ pathname: 'https://youtu.be/n3tlPnxhyyk' }} state={{ data: data }}>$50,000 UC SPEND ON SCARL FULL MAX 😍 </Link>
        },
        {
            vid: 'https://i.ytimg.com/vi/LIC3hNt6yYo/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhEIFsocjAP&rs=AOn4CLAr_HwCcmk2vlfvs89DQQ_v7JOuyw',
            text: <Link style={{ color: 'black', textDecoration: 'none' }} to={{ pathname: 'https://youtu.be/LIC3hNt6yYo' }} state={{ data: data }}>Uska Hi Bana 💔  [Slowed + Reverb]  Arijit </Link>
        },
        {
            vid: 'https://i.ytimg.com/vi/lxIA1r4QOSI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPgpFGNCEpLsfFfCIuQV86HC7g3w',
            text: <Link style={{ color: 'black', textDecoration: 'none' }} to={{ pathname: 'https://youtu.be/N2WcCQhcygk' }} state={{ data: data }}>Barish Me Phass Gae 💔 Lahore to Islamabad </Link>
        },
        {
            vid: 'https://i.ytimg.com/vi/jwhG6pO09YU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFfNgHg4fWwP70_7fsEwSxtsrKpg',
            text: <Link style={{ color: 'black', textDecoration: 'none' }} to={{ pathname: 'https://youtu.be/z_xZMSC-mCk' }} state={{ data: data }}>Bol Do Na Zara [Slowed + Reverb] Armaan  </Link>
        },
        {
            vid: 'https://i.ytimg.com/vi/n3tlPnxhyyk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZNI0D4Gpi09_Qc5ibZ40bWDDI7A',
            text: <Link style={{ color: 'black', textDecoration: 'none' }} to={{ pathname: 'https://youtu.be/n3tlPnxhyyk' }} state={{ data: data }}>$50,000 UC SPEND ON SCARL FULL MAX 😍 </Link>
        }
    ]
    return (
        <>
            <div>
                <Draw />
            </div>
            <div className='main_div'>
                <div>
                    <ReactPlayer url={location?.pathname} playing controls={true} className='player' />

                    <div className='text_div'>
                        <h3>Tom & Jerry | Your Most Iconic Frenemies!</h3>
                    </div>
                    <div className='inner_div'>
                        <img className='img' src='https://yt3.ggpht.com/kp93Yn6YK4etiQWeXMHxybHxTY9AJqZU5AcwDm4ZM8GmX4MRVjNXxQtTkxxJGw-E8Qi08qcwhQ=s176-c-k-c0x00ffffff-no-rj'  />
                        <p>Pro TV</p>
                        <button>Subscribe</button>
                        <div className='likes_and_share_div'>
                            <div className='likes_div'>
                                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                    {likes === true || dislike !== true ?
                                        <span className='like_icon' onClick={like}><LikeOutlined /> </span>
                                        :
                                        <span className='like_icon' onClick={dis}><LikeFilled /></span>
                                    }
                                    <span className='m'>120k</span>
                                    <div className='new_div'>
                                    </div>
                                    {dislike === true || likes !== true ?
                                        <span className='x' onClick={disl} ><DislikeOutlined /></span>
                                        :
                                        <span className='x' onClick={disli}><DislikeFilled /></span>
                                    }
                                </div>
                            </div>
                            <div className='share_div' style={{ display: 'flex', justifyContent: 'space-evenly', margin: '0px 15px' }}>
                                <span className='M'>Share</span>
                                <span><ReplyAllOutlinedIcon /></span>
                            </div>
                            <div className='options'>
                                <span><MoreHorizOutlinedIcon /></span>
                            </div>
                        </div>
                    </div>
                    <p className='para'>300k Subscribers</p>
                    <div className='inner_div2'>
                        <p className='p'>411K views  12 days ago</p>
                        <p>Title:-TOP 10 Unbelievable fielding efforts in Cricket history</p>
                    </div>
                    <div className='comments'>
                        <p>71 Comments</p>
                        <svg viewBox='0 0 24 24' preserveAspectRatio='xMidYMid meet' focusable='false' className='style-scope yt-icon'><g className='style-scope yt-icon'><path d='M21,6H3V5h18V6z M15,11H3v1h12V11z M9,17H3v1h6V17z' className='style-scope yt-icon'></path></g></svg>
                        <p>Sort by</p>
                    </div>
                    <div className='comment_div'>
                        <img id='imgs' draggable='false' alt='Zain Ali' height='40' width='40' src='https://yt3.ggpht.com/ytc/AMLnZu-O-8JeWVxUyJ2oCDB8KNyd5oh6Ri2OlsE2IxjL7LpKjZPMAAvPaZSORPEo_kDK=s88-c-k-c0x00ffffff-no-rj' />
                        <input type='text' placeholder='Add A Comment' />
                    </div>
                    <div className='main_comment_div'>
                        <div className='comments_div'>
                            <img id='imgs' draggable='false' alt='Zain Ali' height='40' width='40' src='https://yt3.ggpht.com/ytc/AMLnZu-O-8JeWVxUyJ2oCDB8KNyd5oh6Ri2OlsE2IxjL7LpKjZPMAAvPaZSORPEo_kDK=s88-c-k-c0x00ffffff-no-rj' />
                            <p className='name'>Zain</p>
                            <p className='hour'>✔ 13 hours ago</p>
                        </div>
                        <p className='comen'>Nice 🙂🙂🙂</p>
                        <div className='comment_likes' style={{ display: 'flex' }}>
                            {likees === true || dislikes !== true ?
                                <span className='like_icon' onClick={like1}><LikeOutlined /> </span>
                                :
                                <span className='like_icon' onClick={disl1}><LikeFilled /></span>
                            }
                            <span>120</span>
                            {dislikes === true || likees !== true ?
                                <span className='x' onClick={disl2} ><DislikeOutlined /></span>
                                :
                                <span className='x' onClick={disl3}><DislikeFilled /></span>
                            }
                            <div>Reply</div>
                        </div>
                    </div>
                    <div className='main_comment_div'>
                        <div className='comments_div'>
                            <img id='imgs' draggable='false' alt='Zain Ali' height='40' width='40' src='https://yt3.ggpht.com/aPEEJ_bAo-H95RBFGTcXx29K-e5ItjKVIOrk-2bDNtM3kAbAaNOR1R70PwaVx75gWcmHm1PBTg=s88-c-k-c0x00ffffff-no-rj' />
                            <p className='name'>Zain</p>
                            <p className='hour'>✔ 13 hours ago</p>
                        </div>
                        <p className='comen'>Nice 🙂🙂🙂</p>
                        <div className='comment_likes' style={{ display: 'flex' }}>
                            {likes === true || dislike !== true ?
                                <span className='like_icon' onClick={like}><LikeOutlined /> </span>
                                :
                                <span className='like_icon' onClick={dis}><LikeFilled /></span>
                            }
                            <span>120</span>
                            {dislike === true || likes !== true ?
                                <span className='x' onClick={disl} ><DislikeOutlined /></span>
                                :
                                <span className='x' onClick={disli}><DislikeFilled /></span>
                            }
                            <div>Reply</div>
                        </div>
                    </div>
                    <div className='main_comment_div'>
                        <div className='comments_div'>
                            <img id='imgs' draggable='false' alt='Zain Ali' height='40' width='40' src='https://yt3.ggpht.com/Z7lJ5IW4cxnfrofD_9HYrQvwPV_288N6xhK6UedLkOXrFq-0P_2uShQldiic3kDypdpJqsfYndc=s88-c-k-c0x00ffffff-no-rj' />
                            <p className='name'>Zain</p>
                            <p className='hour'>✔ 13 hours ago</p>
                        </div>
                        <p className='comen'>Nice 🙂🙂🙂</p>
                        <div className='comment_likes' style={{ display: 'flex' }}>
                            {lik === true || dislik !== true ?
                                <span className='like_icon' onClick={lik1}><LikeOutlined /> </span>
                                :
                                <span className='like_icon' onClick={dis1}><LikeFilled /></span>
                            }
                            <span>120</span>
                            {dislik === true || lik !== true ?
                                <span className='x' onClick={dis2} ><DislikeOutlined /></span>
                                :
                                <span className='x' onClick={dis3}><DislikeFilled /></span>
                            }
                            <div>Reply</div>
                        </div>
                    </div>
                </div>
                <div className='div_1'>
                    <ul>
                        <li id='li' style={{ backgroundColor: 'black', color: 'white' }} onClick={chan}>All</li>
                        <li id='ul' onClick={chang}>Related</li>
                        <li id='u' onClick={change}>Reverberation</li>
                        <li id='lu' onClick={changs}>Live</li>
                        <li id='il' onClick={chans}>Watched</li>
                        <li id='i' onClick={chag}>Recent</li>
                    </ul>
                </div>
                <div>
                    {Video?.map((v, i) => {
                        return (
                            <div className='dis'>
                                <img src={v?.vid} className='playe' />
                                <div className='text_div1'>
                                    <h3>{v?.text}</h3>
                                    <p> ANONYMOUS VLOGS</p>
                                    <p> 285K views 3 months ago</p>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}
export default Player