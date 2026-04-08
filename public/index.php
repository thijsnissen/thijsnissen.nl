<?php

error_reporting(E_ALL|E_STRICT);
ini_set('display_errors', '0');
ini_set('log_errors', '1');

$url = 'https://thijsnissen.nl';

// Optredens
$gigs = 
    array_values(
        array_filter(
            json_decode(file_get_contents( __DIR__ . '/gigs.json'), true),
            fn($g) => strtotime($g[2]) >= strtotime(date("d-m-Y") . ' - 5 days')
        )
    );

usort($gigs, fn($a, $b) => strtotime($a[2]) <=> strtotime($b[2]));

$gigs = array_slice($gigs, 0, 10);

// Load website
require_once __DIR__ . '/views/header.phtml';

require_once __DIR__ . '/views/thijs-nissen.phtml';

require_once __DIR__ . '/views/thijs-nissen-trio.phtml';

require_once __DIR__ . '/views/optredens.phtml';

require_once __DIR__ . '/views/contact.phtml';

require_once __DIR__ . '/views/footer.phtml';
