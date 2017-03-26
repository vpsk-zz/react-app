# react-app
reactJs Application

	# To Run this application clone this repo
		* npm install
		* npm start

Virtual Dom -> make faster reactJS 
				similar to angularjs like in watch function comparing new value with old value.
				In react also virtual dom compare with actual dom.
				if somethings has changed then only further steps will be start otherwise actual dom will
				be untouched.
				if some diff in then then only changed part will update in dom remaining part will remain same


				#Component LifeCycle

componentWillMount - > (Protect method) if you have provied this in ur class then these method will call first
						* immediately before inital rendering	
						* you can implement this method
						* right before render method execute this method will execute first

componentDidmount - >	* immediately after inital rendering

componentWillReceiveProps - >	* when ever comp receiev new props
								* when props changes bbcz of state change or somethin like that

shouldComponentUpdate - > * it is like a question thing
						  * before rendering new view after comp virtual dom & actual dom, after receiving new props or state
						  * to stop rendering on basis of some condition with use of returning false in this method

componentWillUpdate		-> after shouldComponentUpdate return "True" then this will execute
						* before rendering new view after comp virtual dom & actual dom, after receiving new props or state

componentDidUpdate  ->    After component update are flushed to the DOM 

componentWillUnmount   -> Immediately before removing component from DOM
						after routing or updatng state of the comp

									
