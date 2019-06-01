<?php

/**
 * Created by Reliese Model.
 * Date: Sat, 01 Jun 2019 18:12:38 +0000.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Course
 * 
 * @property int $courseid
 * @property string $title
 * @property string $description
 * @property int $creatorid
 * 
 * @property \App\Models\User $user
 * @property \Illuminate\Database\Eloquent\Collection $absences
 *
 * @package App\Models
 */
class Course extends Model
{
	protected $table = 'course';
	protected $primaryKey = 'courseid';
	public $timestamps = false;

	protected $casts = [
		'creatorid' => 'int'
	];

	protected $fillable = [
		'title',
		'description',
		'creatorid'
	];

	public function user()
	{
		return $this->belongsTo(\App\Models\User::class, 'creatorid');
	}

	public function absences()
	{
		return $this->hasMany(\App\Models\Absence::class, 'courseid');
	}
}
