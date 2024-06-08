import React, { useEffect, useState } from 'react'

const Infinitescroll = () => {
    const [data, setdata] = useState([]);
    const [scrollcheck, setscrollcheck] = useState(false);
    const [page, setpage] = useState(1);

    const handlescroll = () => {
        setscrollcheck(window.innerHeight + window.scrollY >= document.body.scrollHeight);
    };

    useEffect(() => {
        if (scrollcheck ) {
            setpage(page + 1);
        }
    }, [scrollcheck]);

    useEffect(() => {
        window.addEventListener('scroll', handlescroll);
        return () => window.removeEventListener('scroll', handlescroll);
    }, []);

    useEffect(() => {
        const fetch_data = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=a79a50cc9c617bb7abb717d180c0e357&language=en-US&page=${page}`);
                const json = await response.json();
                setdata(prevdata => [ ...prevdata, ...json.results]);
            } catch (error) {
                console.log(error);
            }
        };
          if(scrollcheck ||  page === 1){
        fetch_data();
          }
    }, [page ]);

    return (
        <div>
            {data.map(i => (
                <div key={i.id}>
                    <img src={'https://media.themoviedb.org/t/p/w440_and_h660_face' + i.poster_path} />
                </div>
            ))}
        </div>
    );
};

export default Infinitescroll;
