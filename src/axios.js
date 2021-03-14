import axios from 'axios'

const instance  = axios.create({
        baseURL: "https://api.themoviedb.org/3",
        //headers: `Authorization: BearereyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmFjODA1OTU4ZDRkNjQ2ZDc2NjNjZDIxZmRiZTBiZSIsInN1YiI6IjYwNGQxZjU0YWUyODExMDA1NGI2ZTJhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X2yr0Th_ue2nvdi8i1LhHFKPsWxb7CVkzbdQvCtvGYQ`
})

export default instance