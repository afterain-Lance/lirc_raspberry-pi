var lirc_node = require('lirc_node');

lirc_node.init();
let bool = false;

const on_off = () => {
	if(!bool) {
		lirc_node.irsend.send_once('WHISEN','ON');
		bool = !bool;
		console.log('ON');
	}
	else {
		lirc_node.irsend.send_once('WHISEN','OFF');
		bool = !bool;
                console.log('OFF');
	}
}

on_off();
setInterval(on_off,3000);
