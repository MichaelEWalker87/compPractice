import React from 'react';
import Button from '../components/Button';
import { GoBellFill, GoCloud, GoArchive } from "react-icons/go";

function ButtonPage() {
    
    const handleClick = () => {
        console.log("click")
    }

    return (
        <div>
            <div>
                <Button 
                    outline 
                    rounded
                    success
                    className="mb-5" 
                    onClick={handleClick} 
                >
                    <GoBellFill />
                    Click Me!
                </Button>
            </div>
            <div>
                <Button outline danger>
                    <GoCloud/>
                    Buy Now 
                </Button>
            </div>
            <div>
                <Button outline warning>
                    <GoArchive/>
                    Hi Mom
                </Button>
            </div>
            <div>
                <Button outline secondary>
                    
                    HEY Hey Ho
                </Button>
            </div>
            <div>
                <Button outline primary>
                    
                    HEY Hey Ho
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;