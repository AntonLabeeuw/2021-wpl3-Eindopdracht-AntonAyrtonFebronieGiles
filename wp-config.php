<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ID309645_heating' );

/** MySQL database username */
define( 'DB_USER', 'ID309645_heating' );

/** MySQL database password */
define( 'DB_PASSWORD', 'HeatingComp1245;' );

/** MySQL hostname */
define( 'DB_HOST', 'ID309645_heating.db.webhosting.be' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'w ODI,tg&UPWm3!$M4Jigu+T+2TENB(or?RC#S)2,=jEL 3Udoo(p3WFNcN3zcZ>' );
define( 'SECURE_AUTH_KEY',  'w0=1Q/S_s-ZG1FO:|yEOe0Il#Sk}wb(I]QWLTR9!*4!W#?7w5OX?l37QE<a;#p2.' );
define( 'LOGGED_IN_KEY',    '?fx|US9Q]13I4:cQ7wSo0$6^eWKkdVPhiuZ9Wtn@)b8bIhDa0m:Ypfs#&`zJ;Qgh' );
define( 'NONCE_KEY',        '|atdbVMVdK]_kOktB~dS,?:=csEVAh_#* VNCMp;|BvYjSdrBDJwTyi97isWF9@f' );
define( 'AUTH_SALT',        'byT`Sx@!EeuU xCJ=H!>yxQHz*W~QJ/BP_,G3g>NZ~QMn@Q%,h`D!Q <D@jp -ci' );
define( 'SECURE_AUTH_SALT', 'K?qF[|r]lbK&(_z<H5@=:x`!82C[>{#p^N,i.ZjxhXJ_m!Uq/nxvy4H!q0ol!+n>' );
define( 'LOGGED_IN_SALT',   'mYh!3xql%xDY^<QwXqJJ6u%c+=w~AN+z-n~`&_>e--u7)H%|<3~1MT<AO:8s%hr1' );
define( 'NONCE_SALT',       'alY/67rc:/Cm}|g73bD5H3m^|sN(]@xK,.fO2}Cc3<Q5T0A#{&!&,]aj CVF-yx1' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
