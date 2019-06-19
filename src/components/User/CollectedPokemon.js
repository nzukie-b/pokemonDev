import React from "react"
import {Link} from "react-router-dom"


const CollectedPokemon = ({loggedIn, user, collectedPokemon}) => {
    if (loggedIn) {
        return (
            <div className="row mt-2 container-fluid">
                {collectedPokemon.map((poke) => {
                    console.log(poke)
                    const linkVar = "/pokemon/" + poke.name
                    return (
                        <div className="col-2 mb-1 px-0 mr-1" key={poke.id}>
                            <Link className="btn btn-outline-info btn-block"
                                  to={linkVar}>
                                {/* MIGHT NEED THE ONCLICK FROM SEARCH.JS*/}
                                {poke.name}
                            </Link>
                        </div>
                    )
                })
                }
            </div>
        )
    } else {
        return <div></div>
    }
}
export default CollectedPokemon
