{
	"title": "New Life Baptist Church | Giving Statements",
	"description": "",
	"header": "Giving Statements",
	"cannonical": "/yearendgiving.html"
}
<section class="interior-section">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h4>Giving Statement Tax Form</h4>
				<form name="giving-statements" method="POST" action="/thankyou.html" netlify>
					<div class="site-input">
						<label for="name">Your Name <abbr title="required">*</abbr></label>
						<input id="name" type="text" name="name" placeholder="Ex: Firstname Lastname" required>
					</div>
					<div class="site-input">
						<label for="email">Your Email <abbr title="required">*</abbr></label>
						<input id="email" type="email" name="email" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" placeholder="Ex: Firstname Lastname" required>
					</div>	
					<div class="site-input">
						<label for="phone">Phone Number</label>
						<input id="phone" type="tel" name="phone" pattern="^\d{3}-\d{3}-\d{4}$" placeholder="999-999-9999">
					</div>
                    <div class="site-input">
						<label for="giving-number">Your Giving Number</label>
						<input id="giving-number" type="text" name="giving-number" placeholder="">
					</div>
                    <p>Please select how you would like to receive your Giving Statement.</p>
					<div class="site-input">
						<label for="email-copy">
							<input type="radio" id="email-copy" name="method" value="email-copy">
								Email your Giving Statement
						</label><br>
						<label for="physical-copy">
							<input type="radio" id="physical-copy" name="method" value="physical-copy">
								Send a physical copy of your giving statement to the address provided below
						</label>
					</div>
					<div class="site-input">
						<label for="address">Your Address</label>
						<textarea id="address" rows="4" cols="50" name="address" placeholder="If you have requested a phsysical copy above, please include Your Address Here. Street, City, State, Zip"></textarea>
					</div>
					<div data-netlify-recaptcha></div>
					<button type="submit" class="button blue float-right" style="margin-bottom: 30px;">
                        Request Giving Statement
                    </button>
				</form>
			</div>
		</div>
	</div>
</section>
