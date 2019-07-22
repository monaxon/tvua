<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 19 Jul 2019 16:20:24 +0000.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Major
 * 
 * @property int $majorid
 * @property int $level
 * @property string $title
 * @property string $description
 * @property int $creatorid
 * 
 * @property \App\Models\User $user
 * @property \Illuminate\Database\Eloquent\Collection $courses
 *
 * @package App\Models
 */
class Major extends Model
{
	protected $table = 'major';
	protected $primaryKey = 'majorid';
	public $timestamps = false;

	protected $casts = [
		'level' => 'int',
		'creatorid' => 'int'
	];

	protected $fillable = [
		'level',
		'title',
		'description',
		'creatorid'
	];

	public function user()
	{
		return $this->belongsTo(\App\Models\User::class, 'creatorid');
	}

	public function courses()
	{
		return $this->hasMany(\App\Models\Course::class, 'majorid');
	}
}
