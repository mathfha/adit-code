<?php

use Inertia\Testing\AssertableInertia as Assert;

test('landing page renders the welcome Inertia component successfully', function () {
    $response = $this->get('/');

    $response->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('welcome'));
});
