{
	"title": "New Life Baptist Church | Invite Pator Steele",
	"description": "",
	"header": "Invite Our Pastor",
	"type": "page",
	"layout": "single",
	"cannonical": "/venues.html"
}
<section class="interior-section">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-md-6">
				<p>To request Pastor Steele to speak at your event, please complete the form below.</p>
				<form name="booking-pastor" method="POST" netlify>
					<h4>Contact Info</h4>
					<div class="site-input">
						<label for="organization">Church / Organization Name: <abbr title="required">*</abbr></label>
						<input id="organization" type="text" name="organization" placeholder="Ex: Newlife Church" required>
					</div>
					<div class="site-input">
						<label for="name">Your Name / Contact Name <abbr title="required">*</abbr></label>
						<input id="name" type="text" name="name" placeholder="Ex: Firstname Lastname" required>
					</div>
					<div class="site-input">
						<label for="email">Your Email / contact email <abbr title="required">*</abbr></label>
						<input id="email" type="email" name="email" placeholder="Ex: example@email.com" required>
					</div>
					<h4>Event Info</h4>	
					<div class="site-input">
						<label for="event-name">Event Name:</label>
						<input id="event-name" type="text" name="event-name" placeholder="Ex: Youth Convention">
					</div>
					<div class="site-input">
						<label for="event-desc">Event Description:</label>
						<textarea id="event-desc" rows="4" cols="50" name="event-desc" placeholder="Please provide a short description of your event here."></textarea>
					</div>
					<div class="row" style="padding-bottom: 0;">
						<div class="col-xs-6">
							<div class="site-input">
								<label for="event-date">Event Date:</label>
								<input id="event-date" type="date" name="event-date">
							</div>
						</div>
						<div class="col-xs-6">
							<div class="site-input">
								<label for="event-time">Event Time:</label>
								<input id="event-time" type="time" name="event-time">
							</div>
						</div>
					</div>
					<div class="site-input">
						<label for="event-address">Event Address:</label>
						<input class="address-input" id="event-address" type="text" name="event-address" placeholder="Ex: 1281 Biscayne Dr, Concord, NC 28027 ">
					</div>
					<div class="row" style="padding-bottom: 0;">
						<div class="col-xs-6">
							<div class="site-input">
								<label for="event-attire">Event Attire:</label>
								<select id="event-attire" name="event-attire">
									<option value="">Click to Select</option>
									<option value="business-casual">Business Casual</option>
									<option value="casual">Casual</option>
									<option value="formal">Formal</option>
								</select>
							</div>
						</div>
						<div class="col-xs-6">
							<div class="site-input">
								<label for="event-type">Event Type:</label>
								<select id="event-type" name="event-type">
									<option value="">Click to Select</option>
									<option value="anniversary">Anniversary</option>
									<option value="conference">Conference</option>
									<option value="revival">Revival</option>
									<option value="seminar-workshop">Seminar/Workshop</option>
									<option value="small-group">Small Group</option>	
									<option value="wedding">Wedding</option>
									<option value="worship-service">Worship Service</option>
									<option value="other">Other</option>	
								</select>
							</div>
						</div>
					</div>
					<div class="site-input">
						<label for="event-desc">If You chose 'OTHER' - please describe the type of event:</label>
						<input id="event-desc" type="text" name="event-desc" placeholder="Ex: Family Gathering">
					</div>
					<div class="row" style="padding-bottom: 0;">
						<div class="col-xs-6">
							<div class="site-input">
								<label for="event-public">Is this a Public Event ?</label>
								<select id="event-public" name="event-public">
									<option value="">Click to Select</option>
									<option value="yes">Yes - open to the public</option>
									<option value="no">No - this event is private</option>
								</select>
							</div>
						</div>
						<div class="col-xs-6">
							<div class="site-input">
								<div class="site-input">
									<label for="attendance">Estimated Attendance</label>
									<input id="attendance" type="number" name="attendance" placeholder="100">
								</div>
							</div>
						</div>
						<div class="col-xs-6">
							<div class="site-input">
								<label for="event-video">Will Event Be Recorded or streamed ?</label>
								<select id="event-video" name="event-video">
									<option value="">Click to Select</option>
									<option value="yes">Yes - will be recorded</option>
									<option value="no">No - will not be recorded</option>
								</select>
							</div>
						</div>
						<div class="col-xs-6">
							<div class="site-input">
								<label for="activities-after">Activities Planned after event ?</label>
								<select id="activities-after" name="activities-after">
									<option value="">Click to Select</option>
									<option value="yes">Yes - activities planned for after</option>
									<option value="no">No - activities not planned</option>
								</select>
							</div>
						</div>
						<div class="col-xs-12">
							<div class="site-input">
								<label for="activities-desc">If so, please describe the activities planned:</label>
								<textarea id="activities-desc" rows="2" cols="50" name="activities-desc" placeholder="Please provide a short description of the activites here."></textarea>
							</div>
						</div>
					</div>
					<h4>Ministry Support</h4>
					<p>While our growing ministry does not require outside financial support, your contribution helps to carry our ministry and mission forward.</p> 
					<div class="row" style="padding-bottom: 0;">
						<div class="col-xs-12">
							<div class="site-input">
								<label for="sell-products">Can we display and offer our products ?</label>
								<select id="sell-products" name="sell-products">
									<option value="">Click to Select</option>
									<option value="yes">Yes - you may offer your products</option>
									<option value="no">No - no products will be sold</option>
								</select>
							</div>
						</div>
						<div class="col-xs-12">
							<div class="site-input">
								<label for="product-volunteers">If so, will volunteers be available to assist in product sales ?</label>
								<select id="product-volunteers" name="product-volunteers">
									<option value="">Click to Select</option>
									<option value="yes">Yes - we have a visitor support team</option>
									<option value="no">No - we do not provide visitor support for product sales</option>
								</select>
							</div>
						</div>
						<div class="col-xs-12">
							<div class="site-input">
								<label for="financial-gift">Does your church / organizion offer a financial gift or honorarium?</label>
								<select id="financial-gift" name="financial-gift">
									<option value="">Click to Select</option>
									<option value="yes">Yes - we provide an honararium to guest speakers</option>
									<option value="no">No - we cannot provide a finacial gift at this time</option>
								</select>
							</div>
						</div>
						<div class="col-xs-12">
							<div class="site-input">
								<label for="gift-amount">If so, how much would you like to give?</label>
								<input class="dollar-input" id="gift-amount" type="number" name="gift-amount" placeholder="$2000.00" step="0.01" min="0.00">
							</div>
						</div>
					</div>
					<div data-netlify-recaptcha></div>
					<button type="submit" class="button blue float-right">Send Invitation</button>
				</form>
			</div>
			<div class="col-xs-12 col-sm-4 col-md-5 col-md-offset-1">
				<img src="/images/slideshow/1.jpg" class="thumbnail">
				<img src="/images/slideshow/4.jpg" class="thumbnail">
				<img src="/images/slideshow/6.jpg" class="thumbnail">
			</div>
		</div>
	</div>
</section>