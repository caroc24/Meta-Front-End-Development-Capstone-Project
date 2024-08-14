import React from 'react';
import '../App.css';

function CallToAction(){
    return(
        <header className='header'>
            <section>
                {/* Banner Texts */}
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a Table</button>
                </div>
            </section>
        </header>
    )
}
export default CallToAction;