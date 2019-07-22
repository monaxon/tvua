<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 19 Jul 2019 16:20:24 +0000.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Token
 * 
 * @property int $tokenid
 * @property int $userid
 * @property string $tokentext
 * @property \Carbon\Carbon $expiredate
 * 
 * @property \App\Models\User $user
 *
 * @package App\Models
 */
class Token extends Model
{
	protected $table = 'token';
	protected $primaryKey = 'tokenid';
	public $timestamps = false;

	protected $casts = [
		'userid' => 'int'
	];

	protected $dates = [
		'expiredate'
	];

	protected $fillable = [
		'userid',
		'tokentext',
		'expiredate'
	];

	public function user()
	{
		return $this->belongsTo(\App\Models\User::class, 'userid');
	}
}
