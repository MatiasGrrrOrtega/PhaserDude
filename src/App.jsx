import { useState, useEffect } from 'react'
import Escena from './Components/Escena';
import Phaser from 'phaser';

function App() {
    const [listo, setListo] = useState(false);

    useEffect(() => {
        var config = {
        type: Phaser.AUTO,
        scale:{
            autoCenter:Phaser.Scale.CENTER_HORIZONTALLY,
            width: 800,
            height: 600,
        },
        physics: {
            default: 'arcade',
            arcade: {
            gravity: { y: 200 }
            }
        },
        scene: [Escena]
        };
        var game = new Phaser.Game(config);
        game.events.on("LISTO", setListo);
        return () => {
        setListo(false);
        game.destroy(true);
        }
    }, [listo]);

}

export default App